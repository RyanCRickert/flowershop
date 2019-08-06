const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Product {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type User {
  _id: ID!
  email: String!
  password: String
  createdProducts: [Product!]
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input ProductInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
  product: [Product!]!
  login(email: String!, password: String!): AuthData!
}

type RootMutation {
  createUser(userInput: UserInput) : User
  createProduct(productInput: ProductInput): Product!
  removeProduct(productId: ID!) : Product!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);