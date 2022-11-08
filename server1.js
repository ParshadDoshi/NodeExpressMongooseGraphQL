const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphqlSchema = require("./src1/graphql/schema")
const graphqlResolvers = require("./src1/graphql/resolver")
const db = require('./src1/config/dbconfig')
const app = express()
db.MongoConnect();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
)

app.listen(5000, () => console.log("Server is running on localhost:5000"))