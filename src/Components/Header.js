import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'

function Header() {
  const {lightModeToggle, isLightMode} = useContext(TodoContext)

  return (
    <div className='header'>
      <h1>TODO</h1>
      <p className='icon' onClick={() => lightModeToggle()}><img src={isLightMode ? sun : moon} /></p>
    </div>
  )
}

export default Header