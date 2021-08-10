import React from 'react';
import SquareBoxItem from './squareBoxItem';
import "./squareBoxItem.scss";

export default function AllSquareBox (props) {
  const lawType = props.lawType;
  const type = props.type;
  const cases = props.cases;


  console.log('cases:', cases);

  let filtered = cases;
  // console.log('filtered: ', filtered);

  const findCaseBySpeciality = (field) => {
    let result = [];
    for (let x of cases) {
      if (x.law_field === field) {
        result.push(x);
      }
    }
    return result;
  }


  if (lawType) {
    filtered = findCaseBySpeciality(lawType.split('-').join(' '));
  }
  // console.log('filtered: ', filtered);
  // console.log('cases: ', cases);
  // console.log('lawType', props.lawType);


  const CaseItemList = filtered.map((singleCase) => {
    return <SquareBoxItem
      name={singleCase.name}
      id={singleCase.id}
      lawyer_id={singleCase.lawyer_id}
      client={singleCase.client_name}
      date={singleCase.date}
      description={singleCase.description}
      onClick={props.onClick}
      type={type}
      chatToggleHandler={props.chatToggleHandler}
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
      {/* <h3>All the Cases Our App Has:</h3> */}
      {CaseItemList}
    </ul>
  )

}