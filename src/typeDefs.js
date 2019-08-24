import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
  }

  type User {
    id: ID!
    nombre: String!
    segundo_nombre: String!
    apellido_p: String!
    apellido_m: String!
    email: String!
  }

  type Mutation {
    createUser(
      nombre: String!
      segundo_nombre: String!
      apellido_p: String!
      apellido_m: String!
      email: String!
      ): User!
  }
`;

