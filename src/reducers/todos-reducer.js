import { ADD_TODO } from '../actions/todos-actions'
import { REQUEST_TODOS } from '../actions/todos-actions'


export function todosReducer(state=[], {type, payload}){
	switch (type) {
		case ADD_TODO:
			return state.concat(payload);
		case REQUEST_TODOS: 
			return state.concat(payload.todos);
		default: 
			return state;
	}	
}

