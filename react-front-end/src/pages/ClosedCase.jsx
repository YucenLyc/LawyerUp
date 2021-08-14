import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Navbar from "../components/ClientHomeNavbar";
import './ClosedCase.scss';

const axios = require("axios");

function ClosedCase(props) {
  const { case_id } = useParams();
  const [cases, setCases] = useState([]);

  console.log("case id: ", case_id);

  useEffect(() => {
    axios.get("/api/closedcases").then((response) => {
      setCases(response.data);
    });
  }, []);

  console.log("cases: ", cases);

  const findCaseById = (id) => {
    return cases.find((elm) => elm.id === Number(id)) || {};
  };

  const closedCase = findCaseById(case_id);
  return (
    <div>
      <Navbar />
      <div className="closedcasecontainer">
        <header>
          <h1>
            Closed <strong>Cases</strong> Detail
          </h1>
        </header>
        <div className="closedcasebody">
          <div className="closedcaseheader">
            <div class="caseInfo">
              <label for="caseId">Case ID: {closedCase.id}</label>
            </div>
            <div>
              <label for="caseDate">
                {new Date(closedCase.date).toDateString()}
              </label>
            </div>
          </div>
          <div className="closedcasecontent">
            <div>
              <label for="clientName"><b>Client Name:</b> {closedCase.client_name}</label>
            </div>
            <div>
              <label for="lawField"><b>Law Field: </b>{closedCase.law_field}</label>
            </div>
            <div>
              <label for="caseDesc"><b>Case Description: </b></label>
              <p>{closedCase.description}</p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosedCase;
