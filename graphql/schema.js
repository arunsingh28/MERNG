const { buildSchema } = require('graphql')


module.exports = schema = buildSchema(`
    type Query{
        events: [Event!]!
    }

    type Mutation{
        createEvent(eventInput:EventInput): String
    }
     
    type Event{
        _id: ID!
        title:String!
        description: String
        price: Float!
        date: String!
    }

    input EventInput{
        title:String!
        description: String
        price: Float!
        date: String!
    }
`)

