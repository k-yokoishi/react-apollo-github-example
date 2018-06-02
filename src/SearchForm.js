import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';

const SEARCH = gql`
  query search($query: String!, $type: SearchType!) {
    search(query: $query, type: $type, first: 10) {
      nodes {
        ... on Repository {
          id
          nameWithOwner
        }
      }
    }
  }
`;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foundRepositories: [], suggestionOpen: false };
  }

  render() {
    return (
      <div>
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
                    const { nodes } = data.search;
                    this.setState({ foundRepositories: nodes });
                    this.setState({ suggestionOpen: nodes.length > 0 });
                  });
              }}
              style={this.props.style}
            />
          )}
        </ApolloConsumer>
        {this.state.suggestionOpen && (
          <div>
            {this.state.foundRepositories.map(repository => (
              <MenuItem onClick={this.handleClose} key={repository.id}>
                <Link key={repository.id} to={`/${repository.nameWithOwner}`}>
                  {repository.nameWithOwner}
                </Link>
              </MenuItem>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SearchForm;
