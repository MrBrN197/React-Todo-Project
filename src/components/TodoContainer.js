
import React, { useEffect, useState } from 'react';
import TodosList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

function getInitialTodos() {
  const temp = localStorage.getItem("todos")
  const savedTodos = JSON.parse(temp);
  return {todos: savedTodos || []};
}

const TodoContainer = () => {
  const [state, setState] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos])

  const handleChange = (id) => {
    setState({
      todos: state.todos.map( todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    setState({todos: [...state.todos, newTodo]})
  };

  const delTodo = (id) => {
    setState({todos: state.todos.filter( todo => todo.id !== id)})
  }

  const setUpdate = (updatedTitle, id) => {
    setState({
      todos: state.todos.map( todo => {
        if(todo.id === id) todo.title = updatedTitle;
        return todo;
      })
    })
  }

  return (
    <Switch>
      <Route exact path="/">
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
              todos={state.todos}
              handleChangeProps={handleChange}
              deleteTodoProps={delTodo}
              setUpdate={setUpdate}
              />
          </div>
        </div>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  );

}
export default TodoContainer