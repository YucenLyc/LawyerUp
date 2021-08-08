import Navbar from '../ClientHomeNavbar';
import React, { useState, useEffect } from 'react';
import '../pageContainer/Dropdown.scss'
import Dropdown from '../pageContainer/Dropdown';
import AllCaseList from '../AllCaseList';
import Header from '../../pages/Header';



const axios = require('axios');

export default function ClientHomePage() {
  const [cases, setCases] = useState([])
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    axios.get("/api/specialities").then(response => {
      setSpecialities(response.data);
      console.log('specialities:', specialities);
    });
  }, [])

  useEffect(() => {
    axios.get("/api/opencases").then(response => {
      setCases(response.data);
      console.log('cases:', cases);
    });
  }, [])

  console.log('cases:', cases);
  
  return (
    <>
    <Header/>
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>
        Egg Eggerson Homepage {' '}
      </h2>
      <Dropdown title="Select A Category of Law" items={specialities} type="client"/>
      <AllCaseList type="client" cases={cases}/>
      <Navbar />
    </div> 
    </>
  );

}
