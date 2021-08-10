import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CasePopup from './CasePopUp/CasePopup';
import AssignCase from './AssignCase';
import "./CaseItem.scss";
import "../components/ClientHomeNavbar";

const axios = require('axios');


export default function SquareBoxItem(props) {
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

    
    
    <main className="square-box" onClick={togglePopup}>
       
     
      <div>

        {isOpen && <CasePopup
          content={<>
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
        <section className="case-name">
          <div className="case-header">
            <h5><b>Client: {props.client}</b></h5>
            {(sessionStorage.name === props.client) &&
                <div className="your-case">Your Case</div>
            }
          </div>
        </section>
        <section className="case-body">
          <section className="client-id">
            <h6>Case ID: {props.id}</h6>
          </section>
          <section className="case-name">
            <h6>{props.name}</h6>
          </section>
          <section className="case-date">
            <span>{new Date(props.date).toDateString()}</span>
            {/* <h6>date: {props.date.substr(0,10)}</h6> */}
          </section>
        </section>
      </div>
      
    </main>
   
  )
}