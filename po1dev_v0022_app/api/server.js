const express = require('express');
const bodyParser = require('body-parser');


const PORT = 4000;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
	console.log('Server is running on PORT: ', PORT);
});