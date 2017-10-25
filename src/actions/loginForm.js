import { STORAGE_USERS_KEY } from '../constants';
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGIN_RESULT = 'LOGIN_RESULT';

export function loginAction(login, password) { return (dispatch) => {
	dispatch( {
		type: LOGIN_ACTION,
		login,
		password
	});

	requestCheck(login, password).then(() => {
		dispatch({
			type: LOGIN_RESULT,
			isSuccess: checkLogin(login, password),
		})	
	});

	
}
};

function requestCheck(login, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(checkLogin(login, password));
		}, 2000);
	})
};

function checkLogin(login, password){
	const users = window.localStorage.getItem(STORAGE_USERS_KEY);
    if(!users) return false;
      return isUserInStorage(login, password, users);
};

function isUserInStorage(login, password, users) {
	const curentUser = JSON.parse(users).find((user) => {
		if (login===user.login && password===user.password) 
		return true;
	});
	if (curentUser) 
		return true;
	      return false;
	};