import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getTodos } from './actions/todos-actions';

class App extends Component {

  componentDidMount(){
    this.props.onRequestTodos();
  }


  render() {

    let todo = this.props.todos.map(todo => {
      return <p key={todo.id}> {todo.title}</p>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { todo }
      </div>
    );
  }
}

const todosSelector = createSelector(
  state => state.todos, 
  todos => todos
)

const mapStateToProps = createSelector(
  todosSelector, 
  (todos) => ({
    todos
  })
)

const mapActionsToProps = {
  onRequestTodos: getTodos
}




export default connect(mapStateToProps, mapActionsToProps)(App);

