import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import './App.css';
import './index.css';

const errorLink = onError(({ graphQLErrors, networkErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      alert(`GraphQL Errors: ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:2/gql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})



ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
