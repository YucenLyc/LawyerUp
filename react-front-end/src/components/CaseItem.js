import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CasePopup from './CasePopUp/CasePopup';
import AssignCase from './AssignCase';
import "./CaseItem.scss";
const axios = require('axios');

export default function CaseItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const assignCase = (lawyer_id) => {
    axios.put("/api/cases", {
      id: props.id,
      lawyer_id
    }).then(response => {
      console.log('response: ', response);
      history.push('/closedcases');
      // window.location.reload();
    });
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
              <button onClick={props.chatToggleHandler} className="messageClientBtn">Message Client User</button>
            }
            {(props.type === "closed") &&
              <button className="caseDetailsBtn" onClick={() => history.push(`/closedcases/${props.id}`)}>Case Details</button>
            }
            {(sessionStorage.name === props.client) && !props.lawyer_id &&
              <button className="asssignCase" onClick={() => setOpen(!open)}>Assign Case</button>
            }
          </>}
          handleClose={togglePopup}
        />}
        {open && <CasePopup
          content={<AssignCase onCancel={() => setOpen(!open)} onAssign={assignCase} />}
          handleClose={() => setOpen(!open)}
          />}
        <section className="case-id">
          <div className="case-header">
            <h5>Case ID: {props.id}</h5>
            {(sessionStorage.name === props.client) &&
                <div className="your-case">Your Case</div>
            }
          </div>
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
