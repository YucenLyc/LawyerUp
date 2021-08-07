import Navbar from '../ClientHomeNavbar';
import React, { useState, useEffect } from 'react';
import '../pageContainer/Dropdown.scss'
import Dropdown from '../pageContainer/Dropdown';
import AllCaseList from '../AllCaseList';
import Header from '../../pages/Header';

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

const axios = require('axios');

export default function ClientHomePage() {
  const [specialities, setSpecialities] = useState([]);
  useEffect(() => {
    axios.get("/api/specialities").then(response => {
      setSpecialities(response.data);
      console.log('specialities:', specialities);
    });
  }, [])
  
  return (
    <>
    <Navbar />
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>
        Egg Eggerson Homepage {' '}
      </h2>
      <Dropdown title="Select A Category of Law" items={specialities} type="client"/>
      <AllCaseList type="client"/>
    </div> 
    </>
  );

}
