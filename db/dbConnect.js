'use strict'
const mongoose = require('mongoose');
const Task = require('data.task');
mongoose.set('debug', true);

let connectToDB = (url) => {
	return new Task( ( reject, result ) => {
		mongoose.connect(url, ( err, res ) => {
			if(err) reject(err)
			else result(res)
		} )
	})
}

module.exports = connectToDB('mongodb://127.0.0.1:27017/test');
