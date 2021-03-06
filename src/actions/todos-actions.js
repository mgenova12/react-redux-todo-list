import axios from 'axios';
export const ADD_TODO = 'todos:addTodos';
export const REQUEST_TODOS = 'todos:requestTodos';
export const DELETE_TODO = 'todos:index';


export function addTodos(newTodo) {
	return {
		type: ADD_TODO,
		payload: {
			todos: newTodo
		}
	}
}

export function requestTodos(apiTodos) {
	return {
		type: REQUEST_TODOS,
		payload: {
			todos: apiTodos
		}
	}
}

export function deleteTodo(index) {
	return {
		type: DELETE_TODO,
		payload: {
			todos: index
		}
	}
}

export function getTodos() {
	return dispatch => {
		axios.get('https://jsonplaceholder.typicode.com/todos')
		  .then(function (response) {
		    dispatch(requestTodos(response.data));
		  })
		  .catch(function (error) {
		    console.log(error);
		});

	}
}