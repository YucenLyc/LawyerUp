import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {ClientSidebar} from './ClientSidebar';
import '../styles/Navbar.scss';
import { IconContext } from 'react-icons'


function Navbar() {

  const [sidebar, setSidebar] = useState(false)
  
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}> 
    <div className='navbar'>
      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <img className='logo' src="/images/logo.png" alt="" />
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose /> 
          </Link>
        </li>
        {ClientSidebar.map((item, index) => {
          return (
            <li key={index} className={item.sName}>
              <Link to={item.path}>
               {item.icon}
               <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
  )

}

export default Navbar;