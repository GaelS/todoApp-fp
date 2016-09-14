import React from 'react';

export default class Input extends React.Component {
	constructor(props){
		super(props);
	}
	getValue(){
		return this.refs.input.value;
	}
	setValue(value){
		this.refs.input.value = value;
	}
	render(){
		return <input 
				type={ this.props.type || 'text' }
				ref='input'
				defaultValue={ this.props.defaultValue || ''}
				onClick={ this.props.onClick || null }
				/>
	}
};