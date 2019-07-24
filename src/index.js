import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';

import { todosReducer } from './reducers/todos-reducer';

const allReducers = combineReducers({ 
	todos: todosReducer,
})

const allStoreEnhancers = compose( 
	applyMiddleware(thunk),	
	window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
	allReducers, {
		todos: []
	},
	allStoreEnhancers
)



ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
