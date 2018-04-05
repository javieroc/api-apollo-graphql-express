const User = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    location: Location!
    email: String!
    avatar: String!
    address: String!
    city: String!
  }
  type AuthResponse {
    user: User
    token: String
    refreshToken: String
  }
  input LoginData {
    email: String!
    password: String!
  }
  input RegisterData {
    firstName: String!
    lastName: String!
    location: Location!
    address: String!
    email: String!
    password: String!
  }
`;

export default User;
