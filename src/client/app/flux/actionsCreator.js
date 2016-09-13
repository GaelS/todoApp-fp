import allUsers from '../api/request.js';

export function getUsers(){
	//launch call
	
	return (dispatch) => {
		
		dispatch({
			type : 'GETTING_USERS',
			value : null
		});

	return allUsers.fork( 
		(err) => { console.log(err) },
		(data) => { 
			return dispatch( { 
				type : 'RECEIVE_USERS',
				value : data,
			} );
		} )
	}
}