import React, { useState } from "react";
import Header from "./Header";
import Card from "../components/Card";
import '../components/Card.scss';
import Modal from "../pages/LawyerInfoModal";
import '../styles/openCases.css';

const fakeClientCase = {
  case_description: " My name is Egg Eggerson, I got into an argument with my landlord recently over my cat Smooj. When I signed the rental contract, the contract didn't address anything about tenant owning pets, so I assumed it's okay for me to have a cat. I've been living in this apartment for over a year now, and recently my landlord found out from the neighbours that I have a cat. She said I could either move out this month or get rid of Smooj. Of course getting rid of Smooj is not an option for me, so I want to know if she is allowed to make me move out under this circumstance. Please contact me, if you're experience in handling rental dispute!! Much thanks!!"
}

function OpenCases(props) {
  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }

  return (
   
    <div className="clientOpenCasePage">
      <Header />
        <div className="clientOpenCase">
        <div class="caseInfo">
          <label for="caseId">Case ID: </label>
        </div>
        <div>
          <label for="caseDate">Case Date:</label>
        </div>
        <div>
          <label for="caseId">Lawyer: &ensp;</label>
          <span class="lawyerInfo" ><strong>Ham Hammerson</strong>&ensp;<i class="fas fa-info-circle" onClick={ openModal } ></i></span>
          <Modal open={ modalOpen } onMouseOut={ closeModal } header="Modal heading"> 
            <Card />
          </Modal>
        </div>
        <br></br>
        <div class="clientCaseDescription">
          <textarea>
            {fakeClientCase.case_description}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default OpenCases;
