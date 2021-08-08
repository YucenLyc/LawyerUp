import React, { useState, useEffect } from "react";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import lawyerProfileCard from "../components/lawyerProfileCard";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const axios = require('axios');

const fakeClientCase = {
  case_description: " My name is Egg Eggerson, I got into an argument with my landlord recently over my cat Smooj. When I signed the rental contract, the contract didn't address anything about tenant owning pets, so I assumed it's okay for me to have a cat. I've been living in this apartment for over a year now, and recently my landlord found out from the neighbours that I have a cat. She said I could either move out this month or get rid of Smooj. Of course getting rid of Smooj is not an option for me, so I want to know if she is allowed to make me move out under this circumstance. Please contact me, if you're experience in handling rental dispute!! Much thanks!!"
}

function ClosedCase(props) {
  const { case_id } = useParams();
  const [ cases, setCases] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);

  console.log('case id: ', case_id);

  useEffect(() => {
    axios.get("/api/closedcases").then(response => {
      setCases(response.data);
    });
  }, [])

  console.log('cases: ', cases);

  const findCaseById = (id) => {
    return cases.find((elm) => elm.id === Number(id)) || {};
  }

  const closedCase = findCaseById(case_id);
  console.log(closedCase);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
   
    <div>
      <Header />
      <div class="caseInfo">
        <label for="caseId">Case ID: {closedCase.id}</label>
      </div>
      <div>
        <label for="caseDate">Case Date: {new Date(closedCase.date).toDateString()}</label>
      </div>
      <div>
        <label for="clientName">Client Name: {closedCase.client_name}</label>
      </div>
      <div>
        <label for="lawyerName">Lawyer Name: {closedCase.lawyer_name}</label>
      </div>
      <div>
        <label for="lawField">Law Field: {closedCase.law_field}</label>
      </div>
      <div>
        <label for="caseDesc">Case Description: </label>
        <p>{closedCase.description}</p>
      </div>
      <br></br>
      
   
    </div>
   
  );
};

export default ClosedCase;
