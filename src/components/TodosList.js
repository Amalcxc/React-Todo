import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
  render() {
    return <div>
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
          key={todo.id}
          todo={todo}
          handleCheckboxProps={this.props.handleCheckboxProps}
          deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    </div>;
  }
}

export default TodosList;