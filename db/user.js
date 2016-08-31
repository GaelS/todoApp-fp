const db = require("./dbConnect.js");
const taskSchema = require("./task.js");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema( {
      				tasks : { type : [String], default : [] },
      				name : { type : String, required : true }, 
      		 	} );
      
const User = mongoose.model('user', userSchema);
module.exports = User;