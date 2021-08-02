import React, { useState } from 'react';
import Modal from './LawyerInfoModal';
import Header from './Header';

const closedCases = () => {

  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }

  return(
    <div>
      <Header />
      <div class="closedCases">
        <article class="case">
          <label id="closed-caseID">Case ID: </label>
          <label id="closed-case-date">Date: </label>
          <label id="closed-case-lawyer">Lawyer: </label>
          <span class="lawyerInfo">Yucen</span>&ensp;
          <i class="fas fa-info-circle" onClick={ openModal }></i>
          <Modal open={ modalOpen } close={ closeModal } header="Modal heading"> 
          {/* inside here should be pass info of lawyer */}
          Something Here
          </Modal><br></br>
          <span id="closed-case-description">Something Here Too</span>
        </article><br></br>
        <article class="case">
          <label id="closed-caseID">Case ID: </label>
          <label id="closed-case-date">Date: </label>
          <label id="closed-case-lawyer">Lawyer: </label>
          <span class="lawyerInfo">Yucen</span>&ensp;
          <i class="fas fa-info-circle" onClick={ openModal }></i>
          <Modal open={ modalOpen } close={ closeModal } header="Modal heading"> 
          {/* inside here should be pass info of lawyer */}
          Something Here
          </Modal><br></br>
          <span id="closed-case-description">Something Here Too</span>
        </article>
      </div>
    </div>
  );
}

export default closedCases;