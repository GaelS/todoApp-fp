import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../flux/actionsCreator.js';
import Button from './Button.jsx';

const mapStateToProps = ( state ) => {
	return {
    	user: state.users[0]
    };
 };

const mapDispatchToProps = ( dispatch ) => {
	return {
    	changeTodoStatus : (id) => dispatch( actions.changeTodoStatus(id) ),
    };
 };

const Todo = ( { user, changeTodoStatus } ) => {
    return (<ul>
    {	user.tasks.map( ( task, i ) =>
    		<li 
    			key={ i }
    			style={ { color : ( task.done ?'green':'red' ) } }
    		>
    			<div>
	    			{ task.content }
		    			<Button 
		    				onClick={() => changeTodoStatus(i) }
		    				value={ task.done?'undone':'done' }
		    			/>
	    		</div>
    		</li>
  		) 
	}
	</ul>);
}
export default connect(
	mapStateToProps, 
	mapDispatchToProps
	)(Todo);