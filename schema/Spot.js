const Spot = `
  type Spot {
    _id: ID!
    name: String!
    description: String!
    address: String!
    phone: String!
    photos: [String!]!
    rating: Int!
    location: Location!
    price: Int!
  }

  type SpotEdge {
    cursor: String!
    node: Spot!
  }

  type Spots {
    total: Int!
    edges: [SpotEdge]!
    pageInfo: PageInfo!
  }
`;

export default Spot;
