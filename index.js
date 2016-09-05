const express = require('express');
const app = express();
const getURL = require('./google.js');
const DB = require('./db/dbConnect.js');
const User = require('./db/user.js');
//API
const api = require('./api/request.js');
const API = require('./api/routerAPI.js');

//
//DB connection
DB.fork(
	(err) => {console.log(err)},
	(res) => {console.log('connected'); }
);

app.use(express.static(__dirname + '/src/client'));
app.use('/users', API(User, 'name') );

app.get('/', (req, res) => {
	res.sendFile('index.html')
})
.get('/fail', (req, res) => {
	getURL.fork(
	function(error){ console.log(error);console.log('____'); res.send('fail') },
	function(data){ console.log('////') ;console.log(data);console.log('oooo'); res.send("ok") }
)
})
app.listen("3000");
