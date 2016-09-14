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
};

export function changeTodoStatus(id){
	return {
		type : 'CHANGE_STATUS_TODO',
		value : id,
	};
};

export function createTodo(text){
	return {
		type : 'ADD_TODO',
		value : text,
	};
};