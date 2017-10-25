import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRemoveTodo, fetchGetTodo } from '../../actions/todoList.js';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from '../AppStyles.js';


@connect((appState)=>({
  todos: appState.todoList.todos,
  login: appState.loginForm.login
    }), (dispatch)=> bindActionCreators({ fetchRemoveTodo, fetchGetTodo }, dispatch) 
)


export default class TodoList extends Component {
static propTypes = {
	todos: PropTypes.array
    }
componentDidMount() {
    this.props.fetchGetTodo(this.props.login);
  }

handleSubmit = (index) => {
     this.props.fetchRemoveTodo(index);
    
}
  
render(){
	return (
		<div>    
		    <ul>
        {this.props.todos.map((todo, index) =>
          <li key={index} >      
            {todo} <button onClick={() => {this.handleSubmit(index)}}> delete </button>     
          </li>
        )}
        </ul>
		</div>
	);
}
};

