import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navbar from "../components/ClientHomeNavbar";
import "./AddNewCase.scss";

const axios = require('axios');

const AddNewCase = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lawfield, setLawfield] = useState(1);

  console.log(name);
  console.log(description);
  console.log(lawfield);
  const history = useHistory();
 
  const onSubmitClick = () => {
    axios.post("/api/cases", {
      name,
      client_id: sessionStorage.token,
      lawyer_id: null,
      description,
      lawfield 
    }).then(response => {
      console.log('response: ', response);
      history.push('/clientHomePage');
    });
  }
  

  return (
    <>
      <Navbar />
      <div className="NewCase">
        <h1 className="submit-form">Submit Your Case</h1>
        <div className="form-group row">
          <label className="legal-name">Your Legal Name: </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label className="case-title">Your Case Title:</label>
          <div class="col-sm-10">
          <input type="text" class="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Please put a title to your case." />
          </div>
        </div>
        <div className="form-group row">
          <label className="short-description">
          Short Description:
          </label>
          <div class="col-sm-10">
          <input className="description-box" type="text" class="form-control" id="description" placeholder="Please give a short and concise description of your legal dispute:" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>
        <div className="law-field-selection">
          <label>
            <br></br>
            Please pick a law field that best describes your case: </label>
          <select id="law-field-names" onChange={(e) => setLawfield(e.target.value)}>
            <option value="1">Business Law</option>
            <option value="2">Bankruptcy Law</option>
            <option value="3">Civil Rights Law</option>
            <option value="4">Criminal Law</option>
            <option value="5">Environmental Law</option>
            <option value="6">Family Law</option>
            <option value="7">Immigration Law</option>
            <option value="8">Labor Law</option>
          </select>
        </div>
        <div class="form-group row" id="submit-button">
          <div className="col-sm-10">
            <button type="button" class="btn btn-primary" onClick={onSubmitClick}>
              Submit 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewCase;
