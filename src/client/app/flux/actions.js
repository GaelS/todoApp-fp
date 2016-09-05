/*
* ACTION TYPES
*/

export GETTING_USERS = 'GETTING_USERS'; 
export const GET_USERS = 'GET_USERS';
export function getUsers(){
	return function(dispatch){
		dispatch({ action : 'GETTING_USERS', type : null});
		
	}
}
export const ADD_USER = 'GET_USERS';
export const DELETE_USER = 'GET_USERS';

export const ADD_TODO = 'ADD_TODO';
export const GETTING_TODOS = 'GET_TODOS';
export const GET_TODOS = 'GET_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO':
export const DELETE_TODO = 'DELETE_TODO':
 