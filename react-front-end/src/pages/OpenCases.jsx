import React, { useState } from "react";
import Header from "./Header";
//import Modal from "./LawyerInfoModal";
import Form from "react-bootstrap/Form";
import lawyerProfileCard from "../components/lawyerProfileCard";
import CasePopup from "../components/CasePopUp/CasePopup";
import Card from "../components/Card";


const fakeClientCase = {
  case_description: " My name is Egg Eggerson, I got into an argument with my landlord recently over my cat Smooj. When I signed the rental contract, the contract didn't address anything about tenant owning pets, so I assumed it's okay for me to have a cat. I've been living in this apartment for over a year now, and recently my landlord found out from the neighbours that I have a cat. She said I could either move out this month or get rid of Smooj. Of course getting rid of Smooj is not an option for me, so I want to know if she is allowed to make me move out under this circumstance. Please contact me, if you're experience in handling rental dispute!! Much thanks!!"
}

function OpenCases(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // return (
   
  //   <div>
  //     <Header />
  //     <div class="caseInfo">
  //       <label for="caseId">Case ID: </label>
  //     </div>
  //     <div>
  //       <label for="caseDate">Case Date:</label>
  //     </div>
  //     <label for="caseId">Lawyer: </label>
  //     <p class="lawyerInfo" >Ham Hammerson</p>&ensp;
  //     <br></br>
  //     <Form  onClick={togglePopup}>
  //         {isOpen && <Card
  //         content={<>{lawyerProfileCard}
  //       </>}
  //   />}  
  //     <Form.Group as="textarea"  rows="15" className="clientCaseDescription">
  //       {fakeClientCase.case_description}
  //     </Form.Group>
  //     </Form>
      
   
  //   </div>
   
  // );
  
  return (
   
    <div>
      <Header />
      <div class="caseInfo">
        <label for="caseId">Case ID: </label>
      </div>
      <div>
        <label for="caseDate">Case Date:</label>
      </div>
      <label for="caseId">Lawyer: </label>
      <p class="lawyerInfo" >Ham Hammerson</p>&ensp;
      <br></br>
      <Form  onClick={togglePopup}>
          {isOpen && <Card
          content={<>{lawyerProfileCard}
        </>}
    />}  
      <Form.Group as="textarea"  rows="15" className="clientCaseDescription">
        {fakeClientCase.case_description}
      </Form.Group>
      </Form>
      
   
    </div>
   
  );
};

export default OpenCases;
