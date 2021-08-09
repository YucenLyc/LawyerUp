import Axios from "axios";
import React, { useEffect, useState } from "react";

import "./AssignCase.scss";

export default function AssignCase(props) {
  const [lawyerId, setLawyerId] = useState(1);
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    Axios.get('/api/lawyers').then((response) => {
      setLawyers(response.data);
    });
  }, [])

  const onConfirm = () => {
    const { onAssign } = props;
    onAssign(lawyerId);
  }
  console.log(lawyers);

  return (
    <main className="assign-case" >
      <h4>Assign Your Case!</h4>
      <div className="lawyers-selection">
        <label for="dog-names">Please pick a lawyer for your case: </label>
        <select name="lawyer-names" id="lawyer-names" onChange={(e) => setLawyerId(e.target.value)}>
          {lawyers.map((lawyer) => (
            <option key={lawyer.id} value={lawyer.id}>{lawyer.name}</option>
          ))}
        </select>
      </div>
      <div className="button">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="button" onClick={onConfirm}>Confirm</button>
      </div>
    </main>
  )
}