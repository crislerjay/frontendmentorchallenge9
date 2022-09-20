import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import bgLight from '../images/bg-desktop-light.jpg'
import bgDark from '../images/bg-desktop-dark.jpg'

function MainVisual() {
  const { isLightMode} = useContext(TodoContext)

  return (
    <div className={isLightMode ? 'mainvisual' : 'mainvisual dark'}>
      <img src={isLightMode ? bgLight : bgDark} />
    </div>
  )
}

export default MainVisual