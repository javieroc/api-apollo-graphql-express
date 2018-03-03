import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers';

const rootQuery = `
  type Query {
    hello: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery],
  resolvers,
});

export default schema;
