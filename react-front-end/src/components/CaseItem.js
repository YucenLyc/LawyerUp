import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CasePopup from './CasePopUp/CasePopup';
import "./CaseItem.scss";

export default function CaseItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <main className="case-box" onClick={togglePopup}>
      <div>
        {isOpen && <CasePopup
          content={<>
            <b>Here's a Single Case Popup</b>
            <h5>Case Id: {props.id}</h5>
            <h5>Date the Case is Created on the app: {new Date(props.date).toDateString()}</h5>
            <h5>Case Description: </h5>
            <p>{props.description}</p>
            {(props.type === "lawyer") &&
              <button className="messageClientBtn">Message Client User</button>
            }
            {(props.type === "closed") &&
              <button className="caseDetailsBtn" onClick={() => history.push(`/closedcases/${props.id}`)}>Case Details</button>
            }
          </>}
          handleClose={togglePopup}
        />}
        <section className="case-id">
          <h5>Case ID: {props.id}</h5>
          <section className="case-date">
            <h6>date: {new Date(props.date).toDateString()}</h6>
            {/* <h6>date: {props.date.substr(0,10)}</h6> */}
          </section>
        </section>
        <section className="case-body">
          <section className="client-name">
            <div>Client: {props.client}</div>
          </section>
          <section className="case-name">
            <span>{props.name}</span>
          </section>
        </section>
      </div>
    </main>
  )
}
