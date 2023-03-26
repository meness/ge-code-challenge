import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloCache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL,
  cache: apolloCache,
});
