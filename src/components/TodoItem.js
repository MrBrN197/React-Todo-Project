import styles from './TodoItem.module.css';
import { useState, useEffect } from 'react';

const TodoItem = (props) => {

  const [state, setState] = useState({editing: false});

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { id, completed, title } = props.todo;

  const handleEditing = () => {
    setState({editing: true});
  }


  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (e) => {
    if(e.key === 'Enter') {
      setState({editing: false})
    }
  }

  useEffect(() => {
    return () => {
      console.log('Cleaning Up')
    }
  }, [])

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode} >
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input 
        type="text" 
        style={editMode} 
        className={styles.textInput} 
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}


export default TodoItem;