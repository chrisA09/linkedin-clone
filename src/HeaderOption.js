import React from 'react'
import './HeaderOption.css'

function HeaderOption({Avatar, Icon ,title }) {
  return (
    <div className='HeaderOption'>
      {/* 
        %% es una especie de condicional
        si llega Icon(props) se renderiza el componente
      */}
      {Icon && < Icon className='headerOption--icon'/>} {/*icon es un componente porque viene de material ui */}
      {Avatar && (
        <Avatar className='headerOption--icon' avatar={Avatar} src='/static/images/avatar/1.jpg'/>
      )}
      <h3 className='headerOption--title'>{title}</h3>
    </div>
  )
}

export default HeaderOption