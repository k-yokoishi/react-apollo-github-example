import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import REPOSITORY from './graphql/Repository';
import AddStarButton from './AddStarButton';
import RemoveStarButton from './RemoveStarButton';

const Repository = ({
  match: {
    params: { owner, name }
  }
}) => (
  <Query query={REPOSITORY} variables={{ owner, name }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error :(</p>;
      const {
 id, description, stargazers, viewerHasStarred
} = data.repository;
      return (
        <div>
          <Link to={`/${owner}`}>{owner}</Link> / <Link to={`/${owner}/${name}`}>{name}</Link>
          {!viewerHasStarred ? (
            <AddStarButton owner={owner} name={name} id={id} />
          ) : (
            <RemoveStarButton owner={owner} name={name} id={id} />
          )}
          {stargazers.totalCount}
          <p>{description}</p>
        </div>
      );
    }}
  </Query>
);

export default Repository;
