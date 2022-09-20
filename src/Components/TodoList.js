import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import Filter from './Filter'
import Todo from './Todo'

function TodoList() {

  const {data, filter, isLightMode} = useContext(TodoContext)

  return (
    <ul className={isLightMode ? 'todoList' : 'todoList dark'}>
      {data && filter === 'all' ? <Todo data={data} /> : '' }
      {data && filter === 'active' ? <Todo data={data.filter(todo => todo.completed === false)} /> : '' }
      {data && filter === 'completed' ? <Todo data={data.filter(todo => todo.completed === true)} /> : '' }
      <Filter />
    </ul>
  )
}

export default TodoList