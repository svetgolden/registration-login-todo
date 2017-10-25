export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODO = 'GET_TODO';
export const LOGOUT = 'LOGOUT';
import { addTodo, removeTodo, getTodo } from '../API/services.jsx';

	export function fetchLogout(login){ return (dispatch) => {
		dispatch({
			type: LOGOUT,
			login: ''
		})
	}}
	
	export function fetchGetTodo(login) { return (dispatch) => {
		dispatch({
				type: GET_TODO,
				todos: getTodo(login)
				
		})
	}

	};


	export function fetchAddTodo(login, text) {return (dispatch, getState) => {
		addTodo(login, text).then( (todos) =>
				dispatch ({
					type: ADD_TODO,
					todos: todos	
								
				}))
		}
	};


	export function fetchRemoveTodo(id) { return (dispatch, getState) => {
		removeTodo( getState().loginForm.login, id).then ( (todos) =>
			dispatch ({
				type: REMOVE_TODO,
				todos: todos

			}))
		}
	};