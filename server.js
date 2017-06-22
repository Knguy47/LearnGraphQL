const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true
}));

app.listen(8080, () => {
  console.log('Listening on localhost:8080');
});