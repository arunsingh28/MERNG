const express = require('express')
const { graphqlHTTP } = require('express-graphql')
require('dotenv').config()

const schema = require('./graphql/schema')
const resover = require('./graphql/resolver')

const app = express()

// body-praser
app.use(express.urlencoded({ extended: true }))


// init graphQl
app.use('/gql', graphqlHTTP({
    schema: schema,
    rootValues: resover,
    graphiql: true
}))


const port = process.env.PORT || 2
app.listen(port, console.log(`server runing on port:${port}`))