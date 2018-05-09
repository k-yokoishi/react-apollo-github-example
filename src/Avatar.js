import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    viewer {
      avatarUrl
    }
  }
`;

const Avatar = () => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return <img src={data.viewer.avatarUrl} alt="avatar" />;
    }}
  </Query>
);
export default Avatar;
