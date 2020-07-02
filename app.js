// REQUIRES
const express = require('express')
const graphql = require('express-graphql')
const schema = require('./schema');

// VARS
const PORT = process.env.PORT || 4000
const app = express()

// MIDDLEWARES
app.use('/graphql', graphql({
  schema: schema,
  graphiql: true
}))

// SERVER OPS
app.listen(PORT, _ => {
  console.log(`Listening on port: ${PORT}`);
})