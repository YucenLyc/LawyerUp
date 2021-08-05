import Navbar from '../ClientHomeNavbar';
import React from 'react';
import '../pageContainer/Dropdown.scss'
import Dropdown from '../pageContainer/Dropdown';
const items = [
  {
    id: 1,
    value: 'Business Law',
  },
  {
    id: 2,
    value: 'Bankruptcy Law',
  },
  {
    id: 3,
    value: 'Civil Litigation',
  },
  {
    id: 4,
    value: 'Criminal Defence',
  },
  {
    id: 5,
    value: 'Family Law',
  },
  {
    id: 6,
    value: 'Personal Injury Law',
  },
  {
    id: 7,
    value: 'Real Estate Law',
  }
];

export default function ClientHomePage() {

  
  return (
    
    <div className="container">
 
      <h2 style={{ textAlign: 'center' }}>
        Egg Eggerson Homepage {' '}
      </h2>
      <Dropdown title="Select A Category of Law" items={items} multiSelect />
      <Navbar />
    </div> 
    
  );

}
