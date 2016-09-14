import React from 'react';

export default class Button extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <input 
				type={ this.props.type || 'button' }
				value={ this.props.value || 'Send'}
				onClick={ this.props.onClick || null }
				/>
	}
};