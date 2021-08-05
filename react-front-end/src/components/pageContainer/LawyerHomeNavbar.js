import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SameLawyerCaseList from '../SameLawyerCaseList';


function LawyerNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }
  const closeMenu = () => {
    setClick(false);
  }
  return (
    <>
    <nav className='lawyer-navbar'>
      <div className='navbar-container'>
        <Link to="/" className='navbar-logo'>
          LAWYER UP
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
          <li className='nav-item'>
            <Link to='/SameLawyerCaseList' className='nav-links' onClick={closeMenu}>
              My Assigned Cases
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default LawyerNavbar;