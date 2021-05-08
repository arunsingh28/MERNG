const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')


// dotenv

require('dotenv').config()
const Post = require('./Model/Post')


const typeDefs = gql`
    type Post{
        id : ID!
        body : String!
        createdAt : String!
        username : String!
    }
    type Query{
        getPosts : [Post]
    }
`

const resolvers = {
    Query: {
       async getPosts(){
            try {
               const posts = await Post.find()
               return posts 
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database conected'))
    .catch(e => console.log(e))



const port = process.env.PORT || 5000

server.listen({ port })
    .then(res => {
        console.log(`server runing at ${res.url}`)
    })