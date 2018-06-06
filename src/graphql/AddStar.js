import gql from 'graphql-tag';

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

export default ADD_STAR;
