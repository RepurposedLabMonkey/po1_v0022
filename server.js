const express = require('express');
const express_graphql = require('express-graphql');
const cors= require('cors');
const { buildSchema } = require('graphql');
const schema = require('./schema.js');
const app = express().use('*', cors());//cors included to enable CORS requests

// const dbSchema = "po1dev_v0022";

// // GraphQL schema to define the operations with types of data elements involved
// // this block is meant to set up the server for basic querying via postman
//     //run from URL: localhost:4000/graphql from cheome instead to get graphiql
// // query from praphql with basic json eg: { firstname }
// const schema = buildSchema(`
// type Query {
// firstname: String,
// lastname: String
// }
// `);
// // Resolver logic to respond to the query
// const root = {
// firstname: () => 'Walking',
// lastname: () => 'Tree',  
// };
// // Create an express server and a GraphQL endpoint
// app.use('/graphql', express_graphql({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
// }));

//basic feedback on root url
app.get('/', (req, res) => {
	res.send("App is connected to server!");
})

// Create an express server and a GraphQL endpoint
app.use('/graphql', express_graphql({
	schema,
	graphiql: true //gives access to graphical interface
}))

//cmd feedback for server activation/communication
app.listen(4000, function(){
	console.log("listening on PORT 4000"); 
});