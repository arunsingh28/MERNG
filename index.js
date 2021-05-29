const express = require('express')
const { graphqlHTTP } = require('express-graphql')
require('dotenv').config()

const Schema = require('./graphql/schema')
const { resolver } = require('./graphql/resolver')

const app = express()

// body-praser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const events = []

// init graphQl
app.use('/gql', graphqlHTTP({
    schema: Schema,
    rootValue: {
        events: () => {
            return events
        },
        createEvent: (arg) => {
            const event = {
                _id: Math.random().toString(),
                title: arg.eventInput.title,
                description: arg.eventInput.description,
                price: +arg.eventInput.price,
                date: arg.eventInput.date
            }
            events.push(event)
            return event
        }
    },
    graphiql: true
}))


const port = process.env.PORT || 2
app.listen(port, console.log(`server runing on port:${port}`))