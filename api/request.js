'use strict'
const Task = require('data.task');
const R = require('ramda');

/**
* model : either User or Task in our case
* query : Object
* Optionnal : update : Object
* @return : Task
**/
let request = R.curry( ( model, type, query, update ) => {
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
			case 'PUT' : {
				model.update(query, update, (err, res) => {
					if( err ) reject(err)
					else result(res)
				})
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
