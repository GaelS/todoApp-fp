'use strict';
const request = require('./request.js');
const bodyParser = require('body-parser');
const express = require('express');
const R = require('ramda');
const Task = require('data.task');

function generateAPI(model){
	const app = express();

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
	})
	.get( '/:name', ( req, res ) => {
		generateResponse( req.method, { name : req.params.name }, (error) => {  res.sendStatus(400); }, (data) => { res.send(data) } );
	})
	.put( '/:name', ( req, res ) => {
		let query = { name : req.params.name }
		generateResponse( req.method, req.body, (error) => { res.sendStatus(400); }, (data) => { res.send(data) } );
	})
	.post( '/', ( req, res ) => {
		//1st get to check if exists than create
		let get = dbRequest( 'GET', { name : req.body.name } );
		let post = dbRequest( 'POST', req.body);
		let getUser = get.chain( (a) => { 
			//If no user found, perform the post request otherwise reject it
			return ( a.length === 0 ? post : Task.rejected() );
		} );
		getUser.fork(
			(error) => { res.send(error) },
			(data) => { res.sendStatus(200) } )
	})
	.delete( '/', ( req, res ) => {
		generateResponse( req.method, req.body, (error) => { res.sendStatus(400); }, (data) => { res.send(data) } );
	});
	return app;
};

module.exports = R.curry(generateAPI);
