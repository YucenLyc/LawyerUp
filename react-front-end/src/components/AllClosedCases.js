import Navbar from './ClientHomeNavbar';
import React, { useState, useEffect } from 'react';
import AllCaseList from './AllCaseList';
import Header from '../pages/Header';
import AllSquareBox from './AllSquareBox';


const axios = require('axios');

export default function ClosedCases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    axios.get("/api/closedcases").then(response => {
      setCases(response.data);
      console.log('cases:', cases);
    });
  }, [])

  console.log('cases:', cases);
  
  
  return (
    <>
    <Navbar />
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>
       Cases History
      </h2>
      {/* <Dropdown title="Select A Category of Law" items={specialities} type="client"/> */}
      <AllSquareBox type="closed" cases={cases}/>
    </div> 
    </>
  );

}