import { ADD_TODO } from '../actions/todos-actions'
import { REQUEST_TODOS } from '../actions/todos-actions'
import { DELETE_TODO } from '../actions/todos-actions'

import update from 'immutability-helper';

export function todosReducer(state=[], {type, payload}){
	switch (type) {
		case ADD_TODO:
			return [payload.todos].concat(state);
		case REQUEST_TODOS: 
			return update(state, {$set: payload.todos});
		case DELETE_TODO: 
			return update(state, {$splice: [[payload.todos,1]] })
		default: 
			return state;
	}	
}

