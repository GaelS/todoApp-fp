import React from 'react';
import * as actions from '../flux/actionsCreator.js';
import { connect } from 'react-redux';
import Todo from './Todo.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';

const mapDispatchToProps = ( dispatch ) => {
	return {
	    onClick: () => {
	      dispatch(actions.getUsers())
	    },
	    onTodoCreation : (text) => {
	    	dispatch(actions.createTodo( text ) )
	  	}
	};
}
const mapStateToProps = ( state ) => {
	return {
    	users: state.users,
    	loadingUsers : state.loadingUsers,
	};
};

const App = ( { users, loadingUsers, onClick, onTodoCreation } ) => {
	let input ;

	return (
		<div> 
			<input 
				type="button"
				onClick={ onClick }
				value = "Load Users"
			/>
			{ loadingUsers && <p> Chargement </p> }
			{ users.length !== 0 && <Todo /> }	
			{ users.length !== 0 && 
				<form 
					onSubmit = { (e) => {
						e.preventDefault();
						onTodoCreation( input.getValue() );
					} }
				>
					<Input
			    		defaultValue ='add a todo here'
			    		ref= { node => { input = node; } }
			    	/>
			    	<Button
			    		type='submit'
			    		value='save todo'
			    	/>	
		    	</form>
		    }		
		</div>
	);
}	

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);