const Place = `
  type Place {
    _id: ID!
    name: String!
    user: User!
    description: String!
    address: String!
    phone: String!
    photos: [Photo!]!
    rating: Int!
    location: Location!
    price: Int!
  }

  type Photo {
    src: String!
    width: Int!
    height: Int!
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
    edges: [PlaceEdge]!
    pageInfo: PageInfo!
  }
`;

export default Place;
