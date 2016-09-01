const initialState = {
	todos : [],
}

export default ( state = initialState, action ) => {
	return ({
		'ADD_TODO' : Object.assign({}, state, {
			todos : [
				...state.todos,
				{ 
					text : action.text,
					completed : false,
				}
			],
		} )
	} )[action.type] || state;
}
