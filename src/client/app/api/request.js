import R from 'ramda';
import Task from 'data.task';
import {getJSON, post} from 'jquery'

const GET = (uri) => {
	return new Task( (reject, result) => {
		getJSON(uri, reject, result)
	} )
};
let allUsers = GET('http://localhost:3000/users');
console.log(allUsers)
export default allUsers;