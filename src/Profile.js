import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from './Avatar';
import UserRepositoryList from './UserRepositoryList';

const Profile = () => (
  <Grid container>
    <Grid item>
      <Grid container spacing={32}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item>
          <UserRepositoryList />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Profile;
