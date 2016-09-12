import React from 'react';
import {render} from 'react-dom';

class Todo extends React.Component {
  render () {
    return this.props.tasks.map( (task) => {
    	return <li style={ {font : (task.done?'green':'red') } }>{task.content}</li>;
  }
}
export Todo;