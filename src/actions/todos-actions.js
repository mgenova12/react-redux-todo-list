import axios from 'axios'
export const ADD_TODO = 'todos:addTodos'

export function addTodos(newTodo){
	return {
		type: ADD_TODO,
		payload: {
			todos: newTodo
		}
	}
}


export function getTodos(){
	return dispatch => {
		axios.get('https://jsonplaceholder.typicode.com/todos')
		  .then(function (response) {
		    console.log(response);
		    // dispatch(addTodos(response));
		  })
		  .catch(function (error) {
		    console.log(error);
		});

	}
}