import React, {useState, useEffect} from 'react';
import CaseItem from './CaseItem';
import LawyerNavbar from './pageContainer/LawyerHomeNavbar';

const axios = require('axios');

export default function SameLawyerCaseList(props) {
  const [cases, setCases] = useState([])
  
  useEffect(() => {
    axios.get("/api/casesForSameLawyer").then(response => {
      setCases(response.data);
      //console.log('casesForSameLawyer:', casesForSameLawyer);
    });
  }, [])

  console.log("cases:", cases)

  const SameLawyerCaseList = cases.map((SameLawyerSingleCase) => {
    return <CaseItem
      name={SameLawyerSingleCase.name}
      id={SameLawyerSingleCase.id}
      client={SameLawyerSingleCase.client_name}
      date={SameLawyerSingleCase.date}
      description={SameLawyerSingleCase.description}
      onClick={props.onClick}
   />
  });

  return(
    <>
    <LawyerNavbar />
    <ul className="CaseList">
      <h3>Hi Lawyer User, Here Are All Of Your Cases:</h3>
      {SameLawyerCaseList}
    </ul>
    </>
  )

}