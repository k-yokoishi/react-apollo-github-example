import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const AppHeader = () => (
  <Query
    query={gql`
      {
        viewer {
          avatarUrl
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      console.log('error:', error);
      if (error) return <p>Error :(</p>;
      console.log('data:', data);
      return <img src={data.viewer.avatarUrl} alt="avatarUrl" />;
    }}
  </Query>
);
export default AppHeader;
