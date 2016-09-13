import R from 'ramda';
import Task from 'data.task';
import $ from 'jquery'

const GET = (uri) => {
	return new Task( (reject, result) => {
		$.getJSON(uri)
			.fail(reject)
			.done(result)
	} )
};
let allUsers = GET('http://localhost:5000/users');
export default allUsers;