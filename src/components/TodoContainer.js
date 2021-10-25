
import { useState } from 'react';
import TodosList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

import { v4 as uuidv4 } from 'uuid';

import React from "react"
const TodoContainer = () => {
  const [state, setState] = useState({
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
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

  const addTodoItem = title => {
    console.log(title);
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    setState({todos: [...state.todos, newTodo]})
  };

  const delTodo = (id) => {
    console.log('delete:', id);
    setState({todos: state.todos.filter( todo => todo.id !== id)})
  } 

  return (
    <div>
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList 
        todos={state.todos} 
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  );

}
export default TodoContainer