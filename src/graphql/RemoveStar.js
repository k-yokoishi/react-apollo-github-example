import gql from 'graphql-tag';

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

export default REMOVE_STAR;
