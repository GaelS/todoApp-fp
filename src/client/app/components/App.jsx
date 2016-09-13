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
    	loadingUsers : state.loadingUsers,
  	};
 };

const App = ( { users, loadingUsers, onClick } ) => {
	return (
		<div> 
			<input 
				type="button"
				onClick={ onClick }
				placeholder="les utilisateurs"
			/>
			{ loadingUsers && <p> Chargement </p> }
		</div>
	);
}	

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);