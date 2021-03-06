import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const LawyerSidebar = [
  {
    title: 'Home',
    path: '/lawyerhomepage',
    icon: <AiIcons.AiFillHome />,
    sName: 'nav-text'
  },
  {
    title: 'My Assigned Cases',
    path: '/samelawyercaselist',
    icon: <IoIcons.IoIosPaper />,
    sName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/message',
    icon: <FaIcons.FaEnvelopeOpenText />,
    sName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/message',
    icon: <FaIcons.FaRegMeh />,
    sName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <FaIcons.FaRegSun />,
    sName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    sName: 'nav-text'
  }
]