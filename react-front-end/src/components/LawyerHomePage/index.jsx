import React, { useEffect, useState } from 'react';
import Dropdown from '../pageContainer/Dropdown';
import '../pageContainer/Dropdown.scss'
import LawyerNavbar from '../pageContainer/LawyerHomeNavbar';
import AllCaseList from '../AllCaseList';
import Header from '../../pages/Header';
import { useParams } from "react-router-dom";


const axios = require('axios');

export default function LawyerHomePage() {
  const { lawType } = useParams();
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
     <LawyerNavbar />
  
    <div className="container">
    
      <h2 style={{ textAlign: 'center' }}>
        Lawyer Ham Hammerson Homepage {' '}
      </h2>
      <Dropdown title="Select A Category of Law" items={specialities} multiSelect />
      <AllCaseList lawType={lawType} cases={cases}/>   
    </div>
    </>
  );

}
