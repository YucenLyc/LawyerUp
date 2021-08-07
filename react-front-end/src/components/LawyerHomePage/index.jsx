import React, { useEffect, useState } from 'react';
import Dropdown from '../pageContainer/Dropdown';
import '../pageContainer/Dropdown.scss'
import LawyerNavbar from '../pageContainer/LawyerHomeNavbar';
import AllCaseList from '../AllCaseList';
import { useParams } from "react-router-dom";



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

export default function LawyerHomePage() {
  const { lawType } = useParams();

  const [specialities, setSpecialities] = useState([]);
  useEffect(() => {
    axios.get("/api/specialities").then(response => {
      setSpecialities(response.data);
      console.log('specialities:', specialities);
    });
  }, [])

  return (
    <>
     <LawyerNavbar />
  
    <div className="container">
    
      <h2 style={{ textAlign: 'center' }}>
        Lawyer Ham Hammerson Homepage {' '}
      </h2>
      <Dropdown title="Select A Category of Law" items={specialities} multiSelect />
      <AllCaseList lawType={lawType}/>   
    </div>
    </>
  );

}
