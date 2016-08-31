'use strict'
const Task = require('data.task');
const R = require('ramda');
const User = require('../db/user.js');

//model : either User or Task in our case
//query : Object
//@return : Task
let request = R.curry( ( model, type, query ) => {
	return new Task( ( reject, result ) => {
		switch(type){
			case 'GET' : {
				model.find(query, (err, res) => {
					if( err ) reject(err)
					else result(res) 
				})
				break;
			}
			case 'POST' : {
				model.create(query, (err, res) => {
					if( err ) reject(err)
					else result(res) 
				})
				break;
			}
			case 'DELETE' : {
				model.remove(query, (err, res) => {
					if( err ) reject(err)
					else result(res) 
				})
				break;
			}
		}
	} )
} );

module.exports = request;