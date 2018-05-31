import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    viewer {
      avatarUrl
      name
    }
  }
`;

const Avatar = () => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <div>
          <img
            src={data.viewer.avatarUrl}
            alt="avatar"
            width={230}
            height={230}
            style={{ borderRadius: '6px' }}
          />
          <p style={{ fontSize: '26px' }}>{data.viewer.name}</p>
        </div>
      );
    }}
  </Query>
);
export default Avatar;
