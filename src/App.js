import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './App.css';
import Profile from './Profile';
import ACCESS_TOKEN from './config';

const uri = 'https://api.github.com/graphql';
const headers = { authorization: `Bearer ${ACCESS_TOKEN}` };

const link = createHttpLink({ uri, headers });

const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/" component={Profile} />
    </Router>
  </ApolloProvider>
);

export default App;
