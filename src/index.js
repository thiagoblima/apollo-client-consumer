import ApolloBoost, { gql } from  'apollo-boost'

const client = new ApolloBoost({
    uri: 'http://localhost:4000'
})

const getUsers = gql `
     query {
         users {
             id
             name
             createdAt
             updatedAt
         }
     }
`

client.query({
    query: getUsers
}).then((res) => {
    console.log(res.data)
})
