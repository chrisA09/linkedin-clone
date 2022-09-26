import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';


import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleIcon from '@mui/icons-material/People';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Avatar from '@mui/material/Avatar';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';

function Header() {
  return (
    <div className='header'>
        <div className='header--left'>
          <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='linkedin-icon'/>
          <div className='header--search'>
            <SearchIcon />
            <input type='text'/>
          </div>
            
        </div>
        <div className='header--right'>
          
          {/*H.O. componente, hace mas facil la renderizacion de cada opcion*/}
          {/*componentes enviados por props*/}
          <HeaderOption Icon={HomeOutlinedIcon} title='Inicio' />
          <HeaderOption Icon={PeopleIcon} title='Mi red' />
          <HeaderOption Icon={WorkOutlinedIcon} title='Empleos' />
          <HeaderOption Icon={TextsmsRoundedIcon} title='Mensajes' />  
          <HeaderOption Icon={NotificationsRoundedIcon} title='Notificaciones'  />
          <HeaderOption Avatar={Avatar} title ='Yo' />{/*avatar pasa src. No el componente*/}
        </div>
    
    </div>
  )
}

export default Header