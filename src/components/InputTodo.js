import { useState } from 'react';

const InputTodo = () => {

  const [state, setState] = useState({
    title: ""
  })

  const onChange = e => {
    console.log("hello")
    setState({
      [e.target.name]: e.target.value
    });
  }

  return (
    <form>
      <input onChange={onChange} type="text" name="title" placeholder="Add Todo..." value={state.title} />
      <button>Submit</button>
    </form>
  )
}


export default InputTodo;