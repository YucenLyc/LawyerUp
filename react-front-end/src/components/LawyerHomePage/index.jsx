import React from 'react';
import CasePopUp from '../CasePopUp/CasePopup';
import Dropdown from '../pageContainer/Dropdown';
import '../pageContainer/Dropdown.scss'
import LawyerNavbar from '../pageContainer/LawyerHomeNavbar';

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

export default function LawyerHomePage() {
  return (
    
    <div className="container">
      <LawyerNavbar />
      <h2 style={{ textAlign: 'center' }}>
        Lawyer Ham Hammerson Homepage {' '}
      </h2>
      <Dropdown title="Select A Category of Law" items={items} multiSelect />
    </div>
  );

}
