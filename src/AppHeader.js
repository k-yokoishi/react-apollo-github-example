import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchForm from './SearchForm';

const AppHeader = () => (
  <AppBar position="static" color="inherit">
    <Toolbar>
      <Typography variant="title">
        <img src="https://assets-cdn.github.com/favicon.ico" alt="avatar" />
      </Typography>
      <SearchForm style={{ margin: 'auto 10px' }} />
    </Toolbar>
  </AppBar>
);

export default AppHeader;
