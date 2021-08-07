import React, {useState, useEffect} from 'react';
import CaseItem from './CaseItem';
import "./AllCaseList.scss";


const axios = require('axios');

export default function AllCaseList(props) {
  const [cases, setCases] = useState([])
  const [filtered, setFiltered] = useState([])
  const lawType = props.lawType;
  const type = props.type;
  // console.log(type);
  
  useEffect(() => {
    axios.get("/api/cases").then(response => {
      setCases(response.data);
      setFiltered(response.data);
      console.log('cases:', cases);
    });
  }, [])

  console.log('cases:', cases);

  const findCaseBySpeciality = (field) => {
    let result = [];
    for (let x of cases) {
      if (x.law_field === field) {
        result.push(x);
      }
    }
    return result;
  }

  useEffect(() => {
    if (lawType) {
      setFiltered(findCaseBySpeciality(lawType.split('-').join(' ')));
    }
  }, [lawType]);

  console.log('lawType', props.lawType);
  console.log('filtered cases:', cases);

  const CaseItemList = filtered.map((singleCase) => {
    return <CaseItem
      name={singleCase.name}
      id={singleCase.id}
      client={singleCase.client_name}
      date={singleCase.date}
      description={singleCase.description}
      onClick={props.onClick}
      type={type}
   />
  });

  // const CaseItemList = cases.map((singleCase) => {
  //   return <CaseItem
  //     name={singleCase.name}
  //     id={singleCase.id}
  //     client={singleCase.client_name}
  //     date={singleCase.date}
  //     description={singleCase.description}
  //     onClick={props.onClick}
  //  />
  // });

  return(
    <ul className="CaseList">
      <h3>All the Cases Our App Has:</h3>
      {CaseItemList}
    </ul>
  )

}