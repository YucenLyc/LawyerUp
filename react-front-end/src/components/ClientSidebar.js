import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const ClientSidebar = [
  {
    title: 'Home',
    path: '/',
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
    title: 'Messages',
    path: '/message',
    icon: <FaIcons.FaEnvelopeOpenText />,
    sName: 'nav-text'
  },
]