const express = require('express');
const app = express();
const getURL = require('./google.js');
const DB = require('./db/dbConnect.js');
const User = require('./db/user.js');
//API
const api = require('./api/request.js');
const a = require('./api/userApi.js');

//
//DB connection
DB.fork(
	(err) => {console.log(err)},
	(res) => {console.log('connected')}
);

const userApp = a(User, 'name');

app.use('/users', userApp );

app.get('/', (req, res) => {
console.log(req.method)
})
.get('/fail', (req, res) => {
	getURL.fork(
	function(error){ console.log(error);console.log('____'); res.send('fail') },
	function(data){ console.log('////') ;console.log(data);console.log('oooo'); res.send("ok") }
)
})
app.listen("3000");
