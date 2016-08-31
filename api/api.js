'use strict';
const request = require('./request.js');
const express = require('express');
const R = require('ramda');
const app = express();

function generateAPI(app, model){
	app.all( '*', (req,res) => {
		console.log(req.method)
		let query = req.method === 'POST' ? req.body : req.params;
		
		request(model)( req.method, query ).fork(
			(error) => { console.log(error); res.send('err') },
			(data) => { console.log(data); console.log('success'); res.send("bloup") }
		)
	});
	return app;
};

module.exports = R.curry(generateAPI)(app);