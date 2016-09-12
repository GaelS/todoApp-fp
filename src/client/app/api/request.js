const R = require('ramda');
import 'Task' from 'data.task';
import {getJSON, post} from 'jquery'

const GET = (uri) => {
	new Task( (reject, result) => {
		getJSON(uri, reject, result)
	} )
};
export default getUsers = GET('http://localhost:3000/users');
