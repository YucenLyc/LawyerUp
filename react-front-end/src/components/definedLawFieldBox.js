import React from "react";
import"./definedLawFieldBox.scss";

export default function definedLawFieldBox(props) {
  return (
    <main>
      <section className="field-id">
        <h5 className="header">Definition of:{props.name}</h5>
        <section className="field-content">
          <span>{props.definition}</span>
          </section>
      </section>
    </main>
  )
}