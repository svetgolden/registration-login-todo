import { STORAGE_USERS_KEY } from '../constants';
export const REGISTRATION_ACTION = 'REGISTRATION_ACTION';
export const REGISTRATION_RESULT = 'REGISTRATION_RESULT';

export function registrationAction(login, password) { return (dispatch) => {
	dispatch( {
		type: REGISTRATION_ACTION,
		login,
		password
	});

	requestCheck(login, password).then(() => {
		dispatch({
			type: REGISTRATION_RESULT,
			isSuccess: checkRegistration(login, password)
		})	
	});
	

  }
};

function requestCheck(login, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(checkRegistration(login, password));
		}, 1000);
	})
};

function checkRegistration(login, password){
	 // localStorage.clear();
	const users = window.localStorage.getItem(STORAGE_USERS_KEY);
	console.log(users)
    if(!users) {setUser(login, password)
    	return true}
    else return isUserInStorage(login, password, users);       
};

function isUserInStorage(login, password, users) {
	if (
		JSON.parse(users).find( (user) => {
		if (user.login === login && user.password === password)		
     	return true;
	})
	) 
		return true;
	else 
		setUser(login, password)
		return false;
	};


function setUser(login, password) {
	const users = window.localStorage.getItem(STORAGE_USERS_KEY);
 	const usersArray = parseUsersArray(users);
 	usersArray.push({login, password});
 	localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(usersArray));

};


function parseUsersArray(JSONstring) {
 if(JSONstring) {
  return JSON.parse(JSONstring);
 }
 else {
  return [];
 }

}