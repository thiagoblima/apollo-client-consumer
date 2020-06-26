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
    let html = ''
    
    res.data.users.forEach((user) => {
        html += `
           <div>
               <h3> ${user.name} </h3>
           </div>
        `
    })

    document.getElementById('users').innerHTML = html
})
