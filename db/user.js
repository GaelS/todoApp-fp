const db = require("./dbConnect.js");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema( {
      				tasks : { type : [ { content : String, done : Boolean} ], default : [] },
      				name : { type : String, required : true },
      		 	} );

const User = mongoose.model('user', userSchema);
module.exports = User;
