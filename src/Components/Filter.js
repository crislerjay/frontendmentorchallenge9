import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext'

function Filter() {
  const {data, deleteAll, setFilter, filter} = useContext(TodoContext)
  const [count, setCount] = useState('')
  const [isActive, setIsActive] = useState('all')

  const handleFilter = (option) => {
    setFilter(option)
    setIsActive(option)
  }

  useEffect(() => {
    const compute = data.filter(todo => todo.completed === false)
    setCount(compute.length)
  }, [data])
  
  return (
    <div className='filter'>
      <div className='count'>{data.length !== 0 ? `${count} items left`: 'no todo'}</div>
      <div className='filterOptions'>
        <a href='#' className={isActive === 'all' ? 'active' : ''} onClick={() => handleFilter('all')}>All</a>
        <a href='#' className={isActive === 'active' ? 'active' : ''}  onClick={() => handleFilter('active')}>Active</a>
        <a href='#' className={isActive === 'completed' ? 'active' : ''}  onClick={() => handleFilter('completed')}>Completed</a>
      </div>
      <div className='clear' onClick={deleteAll}><a href='#'>Clear Completed</a></div>
    </div>
  )
}

export default Filter