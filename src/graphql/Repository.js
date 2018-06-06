import gql from 'graphql-tag';

const REPOSITORY = gql`
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

export default REPOSITORY;
