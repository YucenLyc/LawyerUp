import React, { useState } from 'react';
import CasePopup from './CasePopUp/CasePopup';
import "./CaseItem.scss";

export default function CaseItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <main className="case-box" onClick={togglePopup}>
      <div>
        {isOpen && <CasePopup
          content={<>
            <b>Here's a Single Case Popup</b>
            <h5>Case Id:</h5>
            <h5>Date the Case is Created on the app:</h5>
            <h5>Case Description: </h5>
            <p>
              My name is Egg Eggerson, I got into an argument with my landlord recently over my cat Smooj. When I signed the rental contract, the contract didn't address anything about tenant owning pets, so I assumed it's okay for me to have a cat. I've been living in this apartment for over a year now, and recently my landlord found out from the neighbours that I have a cat. She said I could either move out this month or get rid of Smooj. Of course getting rid of Smooj is not an option for me, so I want to know if she is allowed to make me move out under this circumstance.
              Please contact me, if you're experience in handling rental dispute!! Much thanks!!
            </p>
            <button className="messageClientBtn">Message Client User</button>
          </>}
          handleClose={togglePopup}
        />}
        <section className="case-id">
          <h5>Case ID: 11{props.case_id}</h5>
          <section className="case-date">
            <h6>August 2, 2021{props.date}</h6>
          </section>
        </section>
        <section className="case-body">
          <section className="client-name">
            <div>Client: Egg Eggerson{props.client_name}</div>
          </section>
          <span>SUMMARY</span>
          <section className="case-summary">
            <p>My landlord wants to kick out me or my cat or both.{props.case_description}</p>
          </section>
        </section>
      </div>
    </main>
  )
}