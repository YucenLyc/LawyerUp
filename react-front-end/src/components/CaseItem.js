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
            <p>{props.description}</p>
            <button className="messageClientBtn">Message Client User</button>
          </>}
          handleClose={togglePopup}
        />}
        <section className="case-id">
          <h5>Case ID: {props.id}</h5>
          <section className="case-date">
            <h6>date: {props.date}</h6>
          </section>
        </section>
        <section className="case-body">
          <section className="client-name">
            <div>Client: Egg Eggerson</div>
          </section>
          <section className="case-name">
            <span>{props.name}</span>
          </section>
        </section>
      </div>
    </main>
  )
}
