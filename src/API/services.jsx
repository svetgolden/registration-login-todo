import STORAGE_TODOS_KEY from'../constants.js';

export function getTodo(login){
	const allTodos = JSON.parse(localStorage.getItem(STORAGE_TODOS_KEY)) || [];
	const userTodos = findUser(login, allTodos);

	if (userTodos) 
	    return  userTodos.todos;
	else 
		return [];			
		
	}
 


export function addTodo(login, text){ return new Promise((resolve, reject)=>{ 
	
	const allTodos = JSON.parse(localStorage.getItem(STORAGE_TODOS_KEY)) || [];
	var userTodos = findUser(login, allTodos);		
			
	if (userTodos) {
	    userTodos.todos.push(text)
	} else {
		var arr = [];
		arr.push(text);
		userTodos = {login, todos: arr};	
		allTodos.push(userTodos);		
	};
	
	localStorage.setItem(STORAGE_TODOS_KEY, JSON.stringify(allTodos));	
	setTimeout(() => {resolve(userTodos.todos) }, 2000)
	});	
};

export function findUser(login, allTodos){	
	return allTodos.find( (item)=>{
     	if (item.login === login)		
     	return true;     	
     })      	
};


export function removeTodo(login, id){ return new Promise((resolve, reject) => {

	const allTodos = JSON.parse(localStorage.getItem(STORAGE_TODOS_KEY));
	const todos = findUser(login, allTodos).todos;
	todos.splice(id, 1);
	localStorage.setItem(STORAGE_TODOS_KEY, JSON.stringify(allTodos));

	setTimeout(() => {resolve(todos) }, 2000)
	});
}

