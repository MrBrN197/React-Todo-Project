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

    if(state.title.trim()) {
      props.addTodoProps(state.title);
      setState({
        ...state,
        title: ""
      })
    } else {
      alert("Please write item");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onChange} type="text" name="title" placeholder="Add Todo..." value={state.title} />
      <button>Submit</button>
    </form>
  )
}


export default InputTodo;