import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './flux/reducer.js'
import App from './components/App.jsx'

/*
* INIT STORE
*/

let store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware,
	)
);
render(
	<Provider store={ store } >
		<App />
	</Provider>,
	document.getElementById('app')
);