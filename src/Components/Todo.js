import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import deleteBtn from '../images/icon-cross.svg'

function Todo({data}) {

  const { toggleTodo, deleteTodo} = useContext(TodoContext)
 
  return (
    <div>
      {data && data.map(todo => (
        <li key={todo.id}>
        <p onClick={() => toggleTodo(todo.id)}>
          <input type="checkbox" name={todo.title} value={todo.title} checked={todo.completed} readOnly />
          <label className={todo.completed ? 'line' : ''} htmlFor={todo.title}>{todo.title}</label>
        </p>
        <p className='deleteBtn' onClick={() => deleteTodo(todo.id)}><img src={deleteBtn} /></p>
      </li>
      ))}
    </div>
  )
}

export default Todo