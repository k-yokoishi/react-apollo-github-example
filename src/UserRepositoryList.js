import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import RepositoryItem from './RepositoryItem';

const QUERY = gql`
  {
    viewer {
      repositories(first: 10) {
        edges {
          node {
            id
            name
            nameWithOwner
            description
            languages(first: 1) {
              edges {
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const style = {
  width: 700,
  height: 450,
  overflowY: 'auto'
};

const UserRepositoryList = () => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <GridList cellHeight={180} style={style}>
          {data.viewer.repositories.edges.map(({
 node: {
 id, name, nameWithOwner, description, languages
}
}) => (
  <GridTile key={id}>
    <RepositoryItem
      name={name}
      nameWithOwner={nameWithOwner}
      description={description}
      languages={languages}
    />
  </GridTile>
            ))}
        </GridList>
      );
    }}
  </Query>
);

export default UserRepositoryList;
