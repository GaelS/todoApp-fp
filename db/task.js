const db = require("./dbConnect.js");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema( {
      				content : String,
      				done : Boolean,
      		 	} );
const Task = mongoose.model('task', taskSchema);     

module.exports = Task;