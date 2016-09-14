import Ramda from 'Ramda';

const initialState = {
	todos : [],
	users : [],
	loadingUsers : false,
	currentUser : 0,
};

export default (( state = initialState, action ) => {
	let newState = Ramda.clone(state);
	 switch(action.type) {
		case 'RECEIVE_USERS' : 
			newState.users = action.value;
			newState.loadingUsers = false;
			break;
		
		case 'GETTING_USERS' : 
			newState.loadingUsers = true;
			break;
		
		case 'CHANGE_STATUS_TODO' : 
			let taskToUpdate = newState.users[newState.currentUser].tasks[action.value];
			taskToUpdate.done = !taskToUpdate.done;
			break;
		case 'ADD_TODO' :
			console.log(action.value);
			newState.users[newState.currentUser].tasks.push( { content : action.value, done : false } );
			break;
	}; 
	return newState;
});
