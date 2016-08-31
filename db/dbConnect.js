'use strict'
const mongoose = require('mongoose');
const Task = require('data.task');

let connectToDB = (url) => {
	return new Task( ( reject, result ) => {
		mongoose.connect(url, ( err, res ) => {
			if(err) reject(err)
			else result(res)
		} )
	})
}

module.exports = connectToDB('mongodb://localhost/test');