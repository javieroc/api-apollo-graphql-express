const User = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    avatar: String!
    address: String!
  }

  type AuthResponse {
    user: User
    token: String
  }

  input LoginData {
    email: String!
    password: String!
  }

  input RegisterData {
    firstName: String!
    lastName: String!
    address: String!
    email: String!
    password: String!
  }
`;

export default User;
