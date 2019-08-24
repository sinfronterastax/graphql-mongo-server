import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
  }

  type User {
    id: ID!
    nombre: String!
    apellido_p: String!
    apellido_m: String!
    email: String!
    dateOfBirth: String
    curp: String
    photoIDmx: String
    photoIDusa: String
    address_mx: AddressMx
    address_usa: AddressUsa
  }

  type AddressMx {
    city: String
    delegacion: String
    colonia: String
    street: String
    houseNumber: String
    zip: String
  }

  type AddressUsa {
    city: String
    street: String
    houseNumber: String
    zip: String
  }

  type Mutation {
    createUser(
      nombre: String!
      apellido_p: String!
      apellido_m: String!
      email: String!
      dateOfBirth: String
      curp: String
      photoIDmx: String
      photoIDusa: String
      ): User!
  }
`;

