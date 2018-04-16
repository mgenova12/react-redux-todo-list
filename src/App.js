import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Button from 'material-ui/Button'

import { addTodos, getTodos, deleteTodo } from './actions/todos-actions';

class App extends Component {

  onUpdateTodo(event){
    event.preventDefault();
    this.props.onAddTodo({title:this.refs.todo.value})
  }

  componentDidMount(){
    this.props.onRequestTodos();
  }

  deleteTodos(id){
    let index = this.props.todos.findIndex(x => x.id === id)
    this.props.onDeleteTodo(index)
  }

  render() {
    console.log(this.props.todos);

    let todo = this.props.todos.map(todo => {
      return <p onClick={this.deleteTodos.bind(this, todo.id)} key={todo.title}> {todo.title}</p>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
    
        <form onSubmit={this.onUpdateTodo.bind(this)} > 
          <div>
            <label>Add Todo </label>
            <input type="text" ref="todo" />
          </div>
          <Button variant="raised" color="primary" type='submit'> Add Todo</Button>
        </form>
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
  onRequestTodos: getTodos,
  onAddTodo: addTodos,
  onDeleteTodo: deleteTodo
}




export default connect(mapStateToProps, mapActionsToProps)(App);

