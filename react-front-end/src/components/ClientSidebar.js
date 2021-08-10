import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const ClientSidebar = [
  {
    title: 'Home',
    path: '/clienthomepage',
    icon: <AiIcons.AiFillHome />,
    sName: 'nav-text'
  },
  {
    title: 'Add My Case',
    path: '/addNewCase',
    icon: <IoIcons.IoIosPaper />,
    sName: 'nav-text'
  },
  {
    title: 'Closed Cases',
    path: '/closedcases',
    icon: <IoIcons.IoIosPaper />,
    sName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/message',
    icon: <IoIcons.IoIosFolderOpen />,
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