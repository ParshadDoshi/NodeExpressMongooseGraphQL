
const { gql } = require('apollo-server-express');
const { buildSchema } = require("graphql")
/*const typeDefs = gql`
type Trainee {
    _id: ID!
    name: String!
    degree: String!
    
  }

  input TraineeInput {
    name: String!
    degree: String!
  }

  type Query {
    getTrainees:[Trainee!]
  }

  type Mutation {
    createTrainee(trainee:TraineeInput): Trainee
  }

  schema {
    query: Query
    mutation: Mutation
  }
 `;
module.exports = typeDefs;*/
module.exports = buildSchema(`

  type Trainee {
    _id: ID!
    name: String!
    degree: String!
    
  }

  input TraineeInput {
    name: String!
    degree: String!
  }

  type Query {
    getAllTrainees:[Trainee!]
  }

  type Mutation {
    createTrainee(trainee:TraineeInput): Trainee,
    deleteTrainee(_id:ID):String
    updateTrainee(_id:ID,trainee:TraineeInput):String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)
