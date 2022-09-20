import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid';
  export const TodoContext = createContext()

  const TodoContextProvider = (props) => {
    const [data, setData] = useState([
      {id: 1, title: 'one', completed: false},
      {id: 2, title: 'two', completed: false},
      {id: 3, title: 'three', completed: true},
    ])

    const [filter, setFilter] = useState('all')
    const [isLightMode, setIsLightMode] = useState(true)

    const lightModeToggle = () => {
      isLightMode ? setIsLightMode(false) :  setIsLightMode(true)
    }

    const addTodo = (title) => {
      setData([...data, {title, completed: false, id: uuid()}])
    }

    const toggleTodo = (id) => {
      const newTodo = [...data]
      const todo = newTodo.find(todo => todo.id === id)
      todo.completed = !todo.completed
      setData(newTodo)
    }
    
    const deleteTodo = (id) => {
      if (window.confirm("Delete the item?")) {
        setData(data.filter(todo => todo.id !== id))
      }
    }

    const deleteAll = () => {
      if (window.confirm("Delete all the items?")) {
        setData([])
      }
    }

    return (
      <TodoContext.Provider value={{data, lightModeToggle, isLightMode, setFilter, filter, toggleTodo, addTodo, deleteTodo, deleteAll}}>
        {props.children}
      </TodoContext.Provider>
    )
  }

  

export default TodoContextProvider