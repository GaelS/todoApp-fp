const initialState = {
	todos : [],
	users : [],
	loadingUsers : false,
};

export default (( state = initialState, action ) => {
	console.log(action)
	return ({
		'RECEIVE_USERS' : Object.assign({}, state, {
			users : action.value,
			loadingUsers : false,
		}),

		'GETTING_USERS' : Object.assign({}, state, {
			loadingUsers : true,
		} ),

		'POST_TODO' : Object.assign({}, state, {
			todos : [
				...state.todos,
				{ 
					text : action.text,
					completed : false,
				}
			],
		} )
	} )[action.type] || state;
});
