import React from 'react'
import './HeaderOption.css'

function HeaderOption({Avatar, Icon ,title }) {
  return (
    <div className='headerOption'>
      {/* 
        && es una especie de condicional
        si llega Icon(props) se renderiza el componente
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
      */}
      {Icon && < Icon className='headerOption--icon'/>} {/*icon es un componente porque viene de material ui */}
      {Avatar && (
        <Avatar className='headerOption--icon' avatar={Avatar}/>
      )}
      <h3 className='headerOption--title'>{title}</h3>
    </div>
  )
}

export default HeaderOption