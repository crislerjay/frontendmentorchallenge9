import React, { useContext, useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext'

function Form() {
  const {addTodo, isLightMode} = useContext(TodoContext)
  const [todo, setTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo !== null && todo !== '') {
      addTodo(todo)
      setTodo('')
    } else {
      alert('please input valid todo')
    }
  }
 
  return (
    <form className={isLightMode ? 'form' : 'form dark' } onSubmit={handleSubmit}>
      <input type='text' value={todo} placeholder='Create a todo...' onChange={(e) => setTodo(e.target.value)}/>
    </form>
  )
}

export default Form