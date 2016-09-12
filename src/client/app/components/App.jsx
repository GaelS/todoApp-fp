import React from 'react';
import * as actions from '../flux/actionsCreator.js';
import { connect } from 'react-redux';


const mapDispatchToProps = ( dispatch ) => {
  return {
    onClick: () => {
      dispatch(actions.getUsers())
    }
  }
};

const mapStateToProps = ( state ) => {
	return {
    	users: state.users,
  	};
 };

const App = ( { users, onClick } ) => {
	return (
		<div> 
			<input 
				type="button"
				onClick={ onClick }
				placeholder="les utilisateurs"
			/>
		</div>
	);
}	

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);