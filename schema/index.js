import { makeExecutableSchema } from 'graphql-tools';
import User from './User';
import Place from './Place';
import resolvers from '../resolvers';

const rootQuery = `
  type Query {
    places(
      # Cursor pointer to get more rows
      cursor: String
      # Amount of rows to fetch
      first: Int
    ): Places!
  }

  type PageInfo {
    endCursor: String!
    hasNextPage: Boolean!
  }

  type Mutation {
    register(registerData: RegisterData!): AuthResponse
    login(loginData: LoginData): AuthResponse
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Place],
  resolvers,
});

export default schema;
