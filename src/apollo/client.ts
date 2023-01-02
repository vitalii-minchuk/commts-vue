import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";

const httpLink = new HttpLink({
  uri: `https://${import.meta.env.VITE_APP_GRAPHQL_HOST}.onrender.com/graphql`,
  // "http://localhost:4004/graphql",

  credentials: "include",
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
