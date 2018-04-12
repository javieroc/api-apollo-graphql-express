const Place = `
  type Place {
    _id: ID!
    name: String!
    user: User!
    description: String!
    address: String!
    phone: String!
    photos: [String!]!
    rating: Int!
    location: Location!
    price: Int!
  }

  type Location {
    lat: Float!
    lng: Float!
  }

  type PlaceEdge {
    cursor: String!
    node: Place!
  }

  type Places {
    total: Int!
    edges: [PlaceEdge]!
    pageInfo: PageInfo!
  }
`;

export default Place;
