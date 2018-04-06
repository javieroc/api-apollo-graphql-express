const User = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    location: Location!
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
  input InputLocation {
    lat: Float!
    lng: Float!
  }
  input RegisterData {
    firstName: String!
    lastName: String!
    location: InputLocation!
    address: String!
    email: String!
    password: String!
  }
`;

export default User;
