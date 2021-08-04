import React from "react";

import "./AssignCase.scss";

export default function AssignCase(props) {

  return (
    <main className="assign-case" >
      <h4>Assign Your Case!</h4>
      <div className="lawyers-selection">
        <label for="dog-names">Please pick a lawyer for your case: </label>
        <select name="lawyer-names" id="lawyer-names">
          <option value="yucen">Yucen</option>
          <option value="john">John</option>
          <option value="jane">Jane</option>
          <option value="donkey">Donkey</option>
        </select>
      </div>
      <div className="button">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="button" onClick={props.onConfirm}>Confirm</button>
      </div>
    </main>
  )
}