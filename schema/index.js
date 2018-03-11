import { makeExecutableSchema } from 'graphql-tools';
import Spot from './Spot';
import resolvers from '../resolvers';

const rootQuery = `
  type Query {
    spots(
      # Cursor pointer to get more rows
      cursor: String
      # Amount of rows to fetch
      first: Int
    ): Spots!
  }

  type PageInfo {
    endCursor: String!
    hasNextPage: Boolean!
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Spot],
  resolvers,
});

export default schema;
