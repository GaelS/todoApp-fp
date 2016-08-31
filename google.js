'use strict'
const Task = require('data.task');
const HTTP = require('request');
const R = require('ramda');

let getURL = function( url ){
	return new Task( function( reject, result ) {
		HTTP.get(url, function(err, res, data){
			if(err) reject(err)
			else result(data)
		});
	} )};

let toUpperCase = function(data){
	return data.map(function(a){
		return a.toUpperCase( )
	});
}
let half = function(data){
	return data.map(function(a){
		return a.length/5;
	});
}
let concat = function(data1, data2){
	return data1.chain(elt1 => {
		return data2.map(elt2 => {
			return elt1.length +' '+ elt2.length;
		})
	})
}
let req1 = getURL('http://www.google.fr');
let req2 = getURL('http://www.lemonde.fr');

let getGoogle = concat(req1,req2) ; //(R.compose(half,toUpperCase))(getURL('http://www.google.fr'));

module.exports = getGoogle;