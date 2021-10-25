
import { useState } from 'react';
import TodosList from './TodoList';
import Header from './Header';

import React from "react"
const TodoContainer = () => {
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  });

  const handleChange = (id) => {
    console.log('clicked', id);
    setState({
      todos: state.todos.map( todo => {
        if(todo.id === id) {
          console.log('changing id:', id)
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  return (
    <div>
      <Header />
      <TodosList todos={state.todos} handleChangeProps={handleChange}/>
    </div>
  );

}
export default TodoContainer