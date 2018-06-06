import React from 'react';
import { Mutation } from 'react-apollo';
import Button from '@material-ui/core/Button';
import ADD_STAR from './graphql/AddStar';
import REPOSITORY from './graphql/Repository';

const AddStarButton = ({ owner, name, id }) => (
  <Mutation
    mutation={ADD_STAR}
    update={(cache, { data }) => {
      const readResult = cache.readQuery({ query: REPOSITORY, variables: { owner, name } });
      readResult.repository.stargazers.totalCount = data.addStar.starrable.stargazers.totalCount;
      readResult.repository.viewerHasStarred = !readResult.repository.viewerHasStarred;
      cache.writeQuery({ query: REPOSITORY, variables: { owner, name }, data: readResult });
    }}
  >
    {addStar => (
      <Button
        variant="raised"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          addStar({ variables: { input: { starrableId: id } } });
        }}
      >
        Star
      </Button>
    )}
  </Mutation>
);

export default AddStarButton;
