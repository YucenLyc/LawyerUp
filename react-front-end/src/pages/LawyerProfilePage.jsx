import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import SummaryDisplay from '../components/summaryDisplay';

const axios = require('axios');

export default function LawyerProfilePage() {
  const { lawyer_id } = useParams();
  const [lawyers, setLawyers] = useState([]);


  useEffect(() => {
    axios.get("/api/lawyers").then(response => {
      setLawyers(response.data);
    });
  }, [])

  console.log('lawyers= ', lawyers);
  console.log('lawyer_id', lawyer_id);

  const filterByLawyerId = (lawyer_id) => {
  
    return lawyers.find(e => e.id === Number(lawyer_id)) || {};
    
  }
  
  const result = filterByLawyerId(lawyer_id);

  console.log('result: ', result);

  return (
    <>
    <Header />
    <div className="heading-container">
        <h3 className="lawyer-name">{result.name}</h3>
        <br></br>
        <h4 className="specialization">Specialization:</h4>
        <div className="speciality-list">{result.speciality}</div>
      </div>
      <div className="content-container">
        <h4>My Self</h4>
        <p>{result.profile}</p>
      </div>
    <br></br> 
    {/* <SummaryDisplay /> */}
   
     
    </>
  )
}