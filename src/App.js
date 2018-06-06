import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './App.css';
import AppHeader from './AppHeader';
import Profile from './Profile';
import Repository from './Repository';

const uri = 'https://api.github.com/graphql';
const headers = { authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` };

const link = createHttpLink({ uri, headers });

const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <AppHeader />
        <div className="main">
          <Route exact path="/" component={Profile} />
          <Route exact path="/:owner/:name" component={Repository} />
        </div>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
