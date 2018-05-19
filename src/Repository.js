import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  query repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      description
      stargazers {
        totalCount
      }
    }
  }
`;
const Repository = ({
  match: {
    params: { owner, name }
  }
}) => (
  <Query query={QUERY} variables={{ owner, name }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error :(</p>;
      const { description, stargazers } = data.repository;
      return (
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>Star {stargazers.totalCount}</p>
        </div>
      );
    }}
  </Query>
);

export default Repository;
