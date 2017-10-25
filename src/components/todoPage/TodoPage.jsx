import React, { Component } from 'react';
import  TodoList from './TodoList.jsx'
import CreateTodo  from './CreateTodo.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLogout } from '../../actions/todoList.js';
import { css } from 'aphrodite';
import styles from '../AppStyles.js';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


@connect((appState)=>({
  login: appState.loginForm.login
    }), (dispatch)=> bindActionCreators({ fetchLogout }, dispatch) 
)

class TodoPage extends Component {

render(){
	return (
		<div className = {css(styles.todoContainer)}>
		<Link to="/" onClick={fetchLogout()}>EXIT</Link>
		<span> Hello, {this.props.login} </span>
		<h1>To Do List</h1>	  
        <CreateTodo/>
        <TodoList/>
          
		</div>
	);
}
}

export default TodoPage;


