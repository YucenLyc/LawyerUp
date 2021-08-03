import React, { useState } from 'react';
import Header from './Header';
import Modal from './LawyerInfoModal';


const OpenCases = () => {
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
      <div class="caseInfo">
        <label for="caseId">Case ID: </label>
        <label for="case-date">Date: </label>
      </div>
      <label for="caseId">Lawyer: </label>
      <span class="lawyerInfo">Yucen</span>&ensp;
      <i class="fas fa-info-circle" onClick={ openModal }></i>
      <Modal open={ modalOpen } close={ closeModal } header="Modal heading"> 
      {/* inside here should be pass info of lawyer */}
      Something Here
      </Modal><br></br>
      <textarea readOnly>Something Here Too</textarea>
      <div>
        <button>Close Assigned</button>
      </div>
    </div>
  );
}

export default OpenCases;