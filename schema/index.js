import { makeExecutableSchema } from 'graphql-tools';
import User from './User';
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

  type Location {
    lat: Float!
    lng: Float!
  }

  type Mutation {
    register(registerData: RegisterData!): AuthResponse
    login(loginData: LoginData): AuthResponse
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Spot],
  resolvers,
});

export default schema;
