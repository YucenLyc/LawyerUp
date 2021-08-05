import React from 'react';
// import '../pageContainer/Dropdown.scss'
// import LawyerNavbar from '../pageContainer/LawyerHomeNavbar';
import Header from './Header';

import SummaryDisplay from '../components/summaryDisplay';


export default function LawyerProfilePage() {

  // const lawyerSummary = [
  //   { id: 1,
  //     content: 'Hello, My name is Ham Hammerson and I have been practicing law for over 15 years. I am highly organized, motivated and experienced attorney who enjoys autonomy as well as working with others to achieve best client outcomes. Demonstrated skill and knowledge in civil, corporate criminal law. Apply extensive experience working with local and state licensing agencies. Familiar with taxes, zoning, licensing and property rights and successfully represented corporate clients in high-profile civil litigation matters'
  //   }
  // ]
  return (
    <>
    <Header />
    <div className="heading-container">
      <h3 className="lawyer-name">Ham Hammerson</h3>
      <br></br>
      <h4 className="specialization">Specialization:</h4>
        <ul className="speciality-list">
            <p>Business Law</p>
            <p>Bankruptcy Law</p>
            <p>Criminal Law</p>
        </ul>
    </div>
    <div className="content-container">
    </div>
    <br></br> 
    <SummaryDisplay />
   
     
    </>
  )
}