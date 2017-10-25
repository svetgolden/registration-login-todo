import { ADD_TODO, REMOVE_TODO, GET_TODO, LOGOUT } from '../actions/todoList.js';

const initialState={
	todos: []	
};

export default function todoList (state = initialState, action){
	switch(action.type){
		case LOGOUT:
		return {
			...state,
			login: action.login
		}
		case GET_TODO:
		return {
			...state,
			todos: action.todos,
					
		}
		case ADD_TODO:  
		return {
			...state,
			todos: action.todos,
								
		}
		case REMOVE_TODO:  
		return {
			...state,
			todos: action.todos
			
        }

        default: return state; 
	}
};