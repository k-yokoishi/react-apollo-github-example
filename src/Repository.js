import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  query repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      description
      stargazers {
        totalCount
      }
      viewerHasStarred
    }
  }
`;

const ADD_STAR = gql`
  mutation addStar($input: AddStarInput!) {
    addStar(input: $input) {
      clientMutationId
      starrable {
        stargazers {
          totalCount
        }
      }
    }
  }
`;

const REMOVE_STAR = gql`
  mutation removeStar($input: RemoveStarInput!) {
    removeStar(input: $input) {
      clientMutationId
      starrable {
        stargazers {
          totalCount
        }
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
      const {
 id, description, stargazers, viewerHasStarred
} = data.repository;
      return (
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>Star {stargazers.totalCount}</p>
          {!viewerHasStarred ? (
            <Mutation
              mutation={ADD_STAR}
              // eslint-disable-next-line no-shadow
              update={(cache, { data }) => {
                const readResult = cache.readQuery({ query: QUERY, variables: { owner, name } });
                readResult.repository.stargazers.totalCount =
                  data.addStar.starrable.stargazers.totalCount;
                readResult.repository.viewerHasStarred = !readResult.repository.viewerHasStarred;
                cache.writeQuery({ query: QUERY, variables: { owner, name }, data: readResult });
              }}
            >
              {addStar => (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addStar({ variables: { input: { starrableId: id } } });
                  }}
                >
                  Star
                </button>
              )}
            </Mutation>
          ) : (
            <Mutation
              mutation={REMOVE_STAR}
              // eslint-disable-next-line no-shadow
              update={(cache, { data }) => {
                const readResult = cache.readQuery({ query: QUERY, variables: { owner, name } });
                readResult.repository.stargazers.totalCount =
                  data.removeStar.starrable.stargazers.totalCount;
                readResult.repository.viewerHasStarred = !readResult.repository.viewerHasStarred;
                cache.writeQuery({ query: QUERY, variables: { owner, name }, data: readResult });
              }}
            >
              {removeStar => (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeStar({ variables: { input: { starrableId: id } } });
                  }}
                >
                  Unstar
                </button>
              )}
            </Mutation>
          )}
          <p>{id}</p>
        </div>
      );
    }}
  </Query>
);

export default Repository;
