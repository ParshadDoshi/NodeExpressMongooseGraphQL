const { ApolloServer } = require('apollo-server-express');
const express = require("express");
const path = '/graphql';

const typeDefs = `
 type Query {
   hello: String!
 },
 type Query{
    greeting : String!
 }
`
const resolvers = {
    Query: {
        hello: () => {
            var a = "Hello";
            var b = " World";
            return a + b;
        },
        greeting: () => {
            return "Weolcome to GraphQL Playground"
        }
    },
}
const PORT = 5000;
async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({ typeDefs, resolvers })
    const app = express();
    await server.start();
    server.applyMiddleware({ app, path });

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
    })
}

startApolloServer(typeDefs, resolvers);
