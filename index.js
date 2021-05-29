const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
require('dotenv').config()

const Schema = require('./graphql/schema')
const Resolver = require('./graphql/resolver')

const app = express()

// body-praser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// init graphQl
app.use('/gql', graphqlHTTP({
    schema: Schema,
    rootValue: Resolver,
    graphiql: true
}))

// make connection to DB
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log('database is connected'))
    .catch(err => console.log(err))

const port = process.env.PORT || 2
app.listen(port, console.log(`server runing on port:${port}`))