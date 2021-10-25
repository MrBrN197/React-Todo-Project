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
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text" 
        className="input-text"
        placeholder="Add Todo..." 
        value={state.title}
        name="title" 
        onChange={onChange} 
      />
      <button className="input-submit">Submit</button>
    </form>
  )
}


export default InputTodo;