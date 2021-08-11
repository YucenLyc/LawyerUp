import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import SameLawyerCaseList from '../SameLawyerCaseList';
import { LawyerSidebar } from '../LawyerSidebar';
import { IconContext } from 'react-icons';

function LawyerNavbar() {

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
        {LawyerSidebar.map((item, index) => {
          return (
            <li key={index} className={item.sName}>
              <Link to={item.path}>
               {item.icon}
               <span className="navbarspan">{item.title}</span>
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

export default LawyerNavbar;