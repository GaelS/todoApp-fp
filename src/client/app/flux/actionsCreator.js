import allUsers from '../api/request.js';

export function getUsers(){
	console.log(allUsers)
	allUsers.fork( {
		function(err){console.log(err)},
		function(data){ console.log(data)},
	} );
	
	return { 
		action : 'GETTING_USERS',
		type : null
	};
}