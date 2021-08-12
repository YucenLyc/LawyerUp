import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CasePopup from './CasePopUp/CasePopup';
import AssignCase from './AssignCase';
import "./CaseItem.scss";
import "../components/ClientHomeNavbar";

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
            <h5>Case Id: {props.id}</h5>
            <h5>Date the Case is Created on the app: {new Date(props.date).toDateString()}</h5>
            <h5>Case Description: </h5>
            <p>{props.description}</p>
            {(props.type === "lawyer") &&
              <button onClick={props.chatToggleHandler} className="messageBtn">Message Client User</button>
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
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hourglass-bottom" viewBox="0 0 16 16">
                 <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
               </svg>
                
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
