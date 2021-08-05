import React from "react";


export default function definedLawField(props) {
  return (
    <main>
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
    </main>
  )
}