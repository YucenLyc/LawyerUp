/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import SameLawyerCaseList from '../SameLawyerCaseList';
import { LawyerSidebar } from '../LawyerSidebar';
import { IconContext } from 'react-icons';
import { ParticleEngine } from '../ParticleEngine';

function LawyerNavbar() {

  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    const particles = new ParticleEngine('projector');
    createjs.Ticker.addEventListener("tick", updateCanvas);
    window.addEventListener('resize', resizeCanvas, false);

    function updateCanvas(){
      particles.render();
    }

    function resizeCanvas(){
      particles.resize();
	  }
  }, []);
  
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}> 
    <div className='navbar'>
    <canvas id="projector">Your browser does not support the Canvas element.</canvas>
      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <div className="navlogo">
          <div className="navappname">LawyerUp</div>
          <img className='logo' src="/images/logo.png" alt="" />
      </div>
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

export default LawyerNavbar;