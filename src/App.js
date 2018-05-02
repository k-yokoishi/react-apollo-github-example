import React from 'react';
import { RaisedButton } from 'material-ui';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import './App.css';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});
client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(console.log); // disable-eslint no-console

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <RaisedButton label="Login" />
    </div>
  </ApolloProvider>
);

export default App;
