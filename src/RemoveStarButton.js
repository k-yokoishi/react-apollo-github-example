import React from 'react';
import { Mutation } from 'react-apollo';
import Button from '@material-ui/core/Button';
import REMOVE_STAR from './graphql/RemoveStar';
import REPOSITORY from './graphql/Repository';

const RemoveStarButton = ({ owner, name, id }) => (
  <Mutation
    mutation={REMOVE_STAR}
    update={(cache, { data }) => {
      const readResult = cache.readQuery({
        query: REPOSITORY,
        variables: { owner, name }
      });
      readResult.repository.stargazers.totalCount = data.removeStar.starrable.stargazers.totalCount;
      readResult.repository.viewerHasStarred = !readResult.repository.viewerHasStarred;
      cache.writeQuery({
        query: REPOSITORY,
        variables: { owner, name },
        data: readResult
      });
    }}
  >
    {removeStar => (
      <Button
        variant="raised"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          removeStar({ variables: { input: { starrableId: id } } });
        }}
      >
        Unstar
      </Button>
    )}
  </Mutation>
);

export default RemoveStarButton;
