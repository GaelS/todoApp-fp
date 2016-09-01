'use strict';
const request = require('./request.js');
const bodyParser = require('body-parser');
const express = require('express');
const R = require('ramda');
const Task = require('data.task');

function generateAPI(model, UrlParam){
	const app = express();

	//Parsing POST request
	app.use(bodyParser.urlencoded({
	  extended: true
	}));
	app.use(bodyParser.json());

	let generateTask = (dbRequest, method, query, update, error, success) => {
		dbRequest( method, query, update ).fork(
			error,
			success
		)
	};
	let dbRequest = request(model);
	let generateResponse = R.curry(generateTask)(dbRequest);

	//For fork callbakcs
	let errorCall = (error, res) => { res.sendStatus(400); };
	let successCall = (data, res) => { console.log(data); res.send(data); };

	app.get( '/', ( req, res ) => {
		generateResponse( req.method, {}, null, (error) => errorCall( error,res ), (data) => successCall( data, res ) );
	})
	.get( `/:${UrlParam}`, ( req, res ) => {
		generateResponse( req.method, { [UrlParam] : req.params[UrlParam] }, null, (error) => errorCall( error,res ), (data) => successCall( data, res ) );
	})
	.put( `/:${UrlParam}`, ( req, res ) => {
		generateResponse( req.method, { [UrlParam] : req.params[UrlParam] }, req.body, (error) => errorCall( error,res ), (data) => successCall( data, res ) );
	})
	.post( '/', ( req, res ) => {
		//1st get to check if the element we want to post already exists
		let get = dbRequest( 'GET', { [UrlParam] : req.body[UrlParam] }, null );
		let post = dbRequest( 'POST', req.body, null );
		let createElt = get.chain( (elt) => {
			//If no element found, perform the post request otherwise reject it
			return ( elt.length === 0 ? post : Task.rejected() );
		} );
		createElt.fork(
			(error) => errorCall( error,res ),
			(data) => successCall( data, res )
		);
	} )
	.delete( '/', ( req, res ) => {
		generateResponse( req.method, req.body, null, (error) => errorCall( error,res ), (data) => successCall( data, res ) );
	});
	return app;
};
module.exports = R.curry(generateAPI);
