const express = require('express')
const { graphqlHTTP } = require('express-graphql')
require('dotenv').config()

const Schema = require('./graphql/schema')
const { resolver } = require('./graphql/resolver')

const app = express()

// body-praser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// init graphQl
app.use('/gql', graphqlHTTP({
    schema: Schema,
    rootValue: {
        createEvent:(arg)=>{
            return arg.name
        }
    },
    graphiql: true
}))


const port = process.env.PORT || 2
app.listen(port, console.log(`server runing on port:${port}`))