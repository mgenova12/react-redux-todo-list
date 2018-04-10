import { ADD_TODO } from '../actions/todos-actions'


export function todosReducer(state=[], {type, payload}){
	switch (type) {
		case ADD_TODO:
			return payload;
		default: 
			return state;
	}	
}

