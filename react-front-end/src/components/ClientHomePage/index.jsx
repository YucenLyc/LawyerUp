import Navbar from '../ClientHomeNavbar';
import React, { useState, useEffect } from 'react';
import '../pageContainer/Dropdown.scss'
import Dropdown from '../pageContainer/Dropdown';
import AllCaseList from '../AllCaseList';
import './index.scss';

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

  console.log('user id: ', sessionStorage.token);
  console.log('user name: ', sessionStorage.name);
  console.log('user email: ', sessionStorage.email);
 
  
  return (
    <>
    <Navbar />
    <main className="client-home-page">
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>
        {sessionStorage.name} Homepage {' '}
      </h2>
      <Dropdown title="select-cat" items={specialities} type="client"/>
      <AllCaseList cases={cases}/>
    
    </div>
    </main>
    </>
  );

}
