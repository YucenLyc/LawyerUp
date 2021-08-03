import React from "react";

import "./CaseItem.scss";

export default function CaseItem(props) {

  return (
    <main className="case-box">
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
          <p>My cat is a dog{props.case_description}</p>
        </section>
      </section>
    </main>
  )
}