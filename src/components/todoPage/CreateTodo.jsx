import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAddTodo } from '../../actions/todoList.js';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from '../AppStyles.js';

@connect((appState)=>({
	login: appState.loginForm.login  
    }), (dispatch)=> bindActionCreators({fetchAddTodo}, dispatch) 
)

export default class CreateTodo extends Component {

	
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.fetchAddTodo(this.props.login, this.textInput.value)

	}

	render(){
	return (
		<div>
    		<form onSubmit={this.handleSubmit}>
				<input type="text" ref={(el)=>this.textInput = el} className = {css(styles.addInp)}/>
    			<button type="submit" className = {css(styles.addBtn)}>Add</button>
    		</form>
		</div>
	);
}
};

