import { useState } from 'react';

const InputTodo = (props) => {

  const [state, setState] = useState({
    title: ""
  })

  const onChange = e => {
    console.log("hello")
    setState({
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit:', state.title);
    props.addTodoProps(state.title);
    setState({
      ...state,
      title: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onChange} type="text" name="title" placeholder="Add Todo..." value={state.title} />
      <button>Submit</button>
    </form>
  )
}


export default InputTodo;