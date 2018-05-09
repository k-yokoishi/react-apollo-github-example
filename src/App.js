import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './App.css';
import AppHeader from './AppHeader';
import ACCESS_TOKEN from './config';

console.log('ENV', process.env);
const uri = 'https://api.github.com/graphql';
const headers = { authorization: `Bearer ${ACCESS_TOKEN}` };

const link = createHttpLink({ uri, headers });

const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <AppHeader />
    </div>
  </ApolloProvider>
);

export default App;
