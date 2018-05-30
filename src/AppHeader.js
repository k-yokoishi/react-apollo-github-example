import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppHeader = () => (
  <AppBar position="static" color="inherit">
    <Toolbar>
      <Typography variant="title">
        <img src="https://assets-cdn.github.com/favicon.ico" alt="avatar" />
      </Typography>
      <TextField label="Repository" margin="normal" />
    </Toolbar>
  </AppBar>
);

export default AppHeader;
