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
      # Search by name, description or address
      filter: String
    ): Places!

    place(
      id: ID!
    ): Place!
  }

  type PageInfo {
    endCursor: String!
    hasNextPage: Boolean!
  }

  type Mutation {
    signup(registerData: RegisterData!): AuthResponse
    signin(loginData: LoginData): AuthResponse
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Place],
  resolvers,
});

export default schema;
