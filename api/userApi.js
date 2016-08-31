'use strict';
const request = require('./request.js');
const bodyParser = require('body-parser');
const express = require('express');
const R = require('ramda');
const app = express();

function generateAPI(app, model){
	//Parsing POST request
	app.use(bodyParser.urlencoded({
	  extended: true
	}));
	app.use(bodyParser.json());

	let generateTask = (dbRequest, method, query, error, success) => {
		dbRequest( method, query ).fork(
			error,
			success
		)
	};
	let dbRequest = request(model);
	let generateResponse = R.curry(generateTask)(dbRequest);
	
	app.get( '/', ( req, res ) => {
		generateResponse( req.method, {}, (error) => { res.sendStatus(400); }, (data) => { res.send(data) } );
	});
	app.get( '/:name', ( req, res ) => {
		generateResponse( req.method, { name : req.params.name }, (error) => {  res.sendStatus(400); }, (data) => { res.send(data) } );
	});
	app.post( '/', ( req, res ) => {
		generateResponse( req.method, req.body, (error) => { res.sendStatus(400); }, (data) => { res.send(data) } );
	});
	app.delete( '/', ( req, res ) => {
		generateResponse( req.method, req.body, (error) => { res.sendStatus(400); }, (data) => { res.send(data) } );
	});
	return app;
};

module.exports = R.curry(generateAPI)(app);
