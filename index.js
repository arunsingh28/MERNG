const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')

const typeDefs = gql`
    type Query{
        sayHi : String!
    }
`


const resolvers = {
    Query : {
        sayHi : () => 'Hello World!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen({ port : 5000})
.then(res => {
    console.log(`server runing at ${res.url}`)
})