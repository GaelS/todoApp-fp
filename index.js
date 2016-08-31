const express = require('express');
const app = express();
const getURL = require('./google.js');
const DB = require('./db/dbConnect.js');
const bodyParser = require('body-parser');
const User = require('./db/user.js');
const Task = require('./db/task.js');
//API
const api = require('./api/request.js');
const a = require('./api/api.js');

//
//DB connection

DB.fork(
	(err) => {console.log(err)},
	(res) => {console.log('connected')}
);

//Parsing POST request
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


//api(User, usersApp);
app.use('/users', a(User) );
app.use('/tasks', a(Task) );


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