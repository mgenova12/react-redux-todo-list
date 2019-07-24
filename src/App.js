import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
// import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { addTodos, getTodos, deleteTodo } from './actions/todos-actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onRequestTodos();
  }

  onUpdateTodo(event) {
    event.preventDefault();
    this.props.onAddTodo({ title: event.target.value });
  }


  deleteTodos(id) {
    const index = this.props.todos.findIndex(x => x.id === id);
    this.props.onDeleteTodo(index);
  }

  render() {
    // console.log(this.props.todos);

    const todo = this.props.todos.map(todo => {
      return <p onClick={this.deleteTodos.bind(this, todo.id)} key={todo.title}> {todo.title}</p>
    });

    return (
      <div className="App">
        <h1>Todo App!! </h1>

        <form onSubmit={this.onUpdateTodo.bind(this)} >
          <TextField
            placeholder="Add Todo"
          />
        </form>
        { todo }
      </div>
    );
  }
}


const todosSelector = createSelector(
  state => state.todos,
  todos => todos,
);

const mapStateToProps = createSelector(
  todosSelector,
  (todos) => ({
    todos,
  })
);

const mapActionsToProps = {
  onRequestTodos: getTodos,
  onAddTodo: addTodos,
  onDeleteTodo: deleteTodo,
};


export default connect(mapStateToProps, mapActionsToProps)(App);

