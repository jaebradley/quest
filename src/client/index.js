import {
  ApolloClient,
} from 'apollo-client';
import {
  ApolloLink,
} from 'apollo-link';
import {
  HttpLink,
} from 'apollo-link-http';
import {
  onError,
} from 'apollo-link-error';

import cache from './cache';
import stateLink from './stateLink';

const httpLink = new HttpLink({
  uri: `${process.env.SERVER_BASE_URL}/graphql`,
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('authenticationToken')}`,
    },
  });

  return forward(operation);
});

const logoutLink = onError(({
  graphQLErrors,
  networkError,
}) => {
  if (graphQLErrors) {
    for (let i = 0; i < graphQLErrors.length; i += 1) {
      const err = graphQLErrors[i];
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          // error code is set to UNAUTHENTICATED
          // when AuthenticationError thrown in resolver

          // modify the operation context with a new token
          throw new Error('Reauth');
        default: {
          return null;
        }
      }
    }
  }
  if (networkError.statusCode === 401) {
    throw new Error('Reauth');
  }

  return null;
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, logoutLink, stateLink, httpLink]),
  cache,
});

export default client;
