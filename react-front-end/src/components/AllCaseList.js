import React, {useState, useEffect} from 'react';
import CaseItem from './CaseItem';
import "./AllCaseList.scss";


const axios = require('axios');

export default function AllCaseList(props) {
  const [cases, setCases] = useState([])
  
  useEffect(() => {
    axios.get("/api/cases").then(response => {
      setCases(response.data);
      console.log('cases:', cases);
    });
  }, [])

  console.log('cases:', cases);

  const CaseItemList = cases.map((singleCase) => {
    return <CaseItem
      name={singleCase.name}
      id={singleCase.id}
      date={singleCase.date}
      description={singleCase.description}
      onClick={props.onClick}
   />
  });

  return(
    <ul className="CaseList">
      <h3>All the Cases Our App Has:</h3>
      {CaseItemList}
    </ul>
  )

}