const express = require('express');
const express_graphql = require('express-graphql');
const bodyParser = require('body-parser');
const cors = require('cors');
const { buildSchema } = require('graphql'); //possibly superfluous
const db = require('./DB.js'); //connection URL for postgres

const PORT = 4000;
const app = express().use('*', cors());//cors included to enable CORS requests

//test connection (connection released if successful)
db.connect()
	.then(function(obj) {
		obj.done();
		console.log("Database connection success!")
	})
	.catch(function(error) {
		console.log("ERROR: ", error);
	})

//use this stuff in the app
app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//basic feedback on root url
app.get('/', (req, res) => {
	res.send("App is connected to server!");
})

// Create an express server and a GraphQL endpoint
// app.use('/graphql', express_graphql({
// 	schema,
// 	graphiql: true //gives access to graphical interface
// }))

//get confirmation of server activation
app.listen(PORT, function() {
	console.log('Server is running on PORT: ', PORT);
});








