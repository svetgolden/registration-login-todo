import { combineReducers } from 'redux';
import loginForm from './loginForm.jsx';
import registrationForm from './registrationForm.jsx';
import todoList from './todoList.jsx'


const rootReducer = combineReducers ({
	loginForm,
	registrationForm,
	todoList
});

export default rootReducer;