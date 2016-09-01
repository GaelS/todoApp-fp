import React from 'react';
import {render} from 'react-dom';
import reducer from './flux/reducer.js';
import { createStore } from 'redux';
/*
* INIT STORE
*/

const store = createStore(reducer);
window.Store = store;
class App extends React.Component {
  render () {
    return <div> 
    		<p> Task for </p>
    	   </div>;
  }
}

render(<App/>, document.getElementById('app'));