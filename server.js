const express = require('express')
const dotenv = require('dotenv');
const { graphqlHTTP } = require("express-graphql")
const db = require('./src/config/dbconfig')
const graphqlSchema = require('./src/graphql/typeDef')
const graphqlResolvers = require('./src/graphql/resolver')
const { makeExecutableSchema } = require('graphql-tools')
dotenv.config();
const app = express()
const port = process.env.PORT || 5000;
db.MongoConnect();
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
)
/*app.use('/api', graphqlHttp({
    schema: makeExecutableSchema({
        typeDefs: graphqlSchema,
        resolvers: graphqlResolvers
    }),

}))*/

app.listen(port, () => {
    console.log(`Server started ar port ${port}`)
});