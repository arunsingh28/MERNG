const { buildSchema } = require('graphql')


module.exports = schema = buildSchema(`
    type Query{
        events: [Event!]!
    }

    type Mutation{
        createEvent(eventInput: EventInput): Event
        createUser(userInput: UserInput): User
    }
    

    type Event{
        _id: ID!
        title: String!
        description: String
        price: Float!
        date: String!
    }
    input EventInput{
        title: String!
        description: String
        price: Float!
        date: String!
    }
 


    type User{
        _id: ID!
        email: String!
        password: String
    }
    input UserInput{
        email: String!,
        password: String!
    }
`)

