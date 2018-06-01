import React from 'react';
import TextField from '@material-ui/core/TextField';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';

const SEARCH = gql`
  query search($query: String!, $type: SearchType!) {
    search(query: $query, type: $type, first: 10) {
      repositoryCount
      nodes {
        ... on Repository {
          nameWithOwner
        }
      }
    }
  }
`;

const SearchForm = ({ style }) => (
  <ApolloConsumer>
    {client => (
      <TextField
        id="search"
        label="Repository"
        type="search"
        onChange={(e) => {
          // Event pooling. see https://reactjs.org/docs/events.html#event-pooling
          const { value } = e.target;
          client
            .query({
              query: SEARCH,
              variables: { query: value, type: 'REPOSITORY' }
            })
            .then(({ data }) => {
              const { repositoryCount, nodes } = data.search;
              // eslint-disable-next-line no-console
              console.log({ count: repositoryCount, repositories: nodes });
            });
        }}
        style={style}
      />
    )}
  </ApolloConsumer>
);

export default SearchForm;
