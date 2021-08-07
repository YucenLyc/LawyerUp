import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import SummaryDisplay from '../components/summaryDisplay';

const axios = require('axios');

export default function LawyerProfilePage() {
  const { lawyer_id } = useParams();
  const [lawyers, setLawyers] = useState([]);
  const [filter, setFilter] = useState([]);

  const fakeData = {"name":"Yucen", "specialization": "Business Law", "profile": "I am specialized in family law related legal issues"};
  useEffect(() => {
    axios.get("/api/lawyers").then(response => {
      setLawyers(response.data);
      setFilter(response.data);
    });
  }, [])
  console.log('lawyers= ', lawyers);
  const filterByLawyerId = (lawyer_id) => {
  
    return filter.find(e => e.id == lawyer_id);
    
  }

  // const result = filterByLawyerId(lawyer_id);
  // console.log('result = ',result);
  useEffect(() => {
    setFilter(filterByLawyerId(lawyer_id));
  }, []);
  return (
    <>
    <Header />
    <div className="heading-container">
      <h3 className="lawyer-name">{fakeData.name}</h3>
      <br></br>
      <h4 className="specialization">Specialization:</h4>
        <p className="speciality-list">
            {fakeData.specialization} 
        </p>
    </div>
    <div className="content-container">
      <h4>My Self</h4>
      <textarea readOnly>{fakeData.profile}</textarea>
      
    </div>
    <br></br> 
    {/* <SummaryDisplay /> */}
   
     
    </>
  )
}