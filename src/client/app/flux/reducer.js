const initialState = {
	todos : [],
	users : [],
}

export default (( state = initialState, action ) => {
	return ({
		'GET_USERS' : Object.assign({}, state, {
			users : [],
		}),

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
