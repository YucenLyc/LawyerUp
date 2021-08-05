import React from "react";
import"./summaryBox.scss";


export default function SummaryBox(props) {

  return (
    <main>
      <section className="summary-id">
        <h5 className="header">About Me:</h5>
        <section className="summary-content">
          <p>{props.content}</p>
          </section>
      </section>
    </main>
  )
}