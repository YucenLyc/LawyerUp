import React from "react";

import SummaryBox from "./summaryBox";

export default function SummaryDisplay(props) {


  const lawyerSummary = [
    { id: 1,
      content: 'Hello, My name is Ham Hammerson and I have been practicing law for over 15 years. I am highly organized, motivated and experienced attorney who enjoys autonomy as well as working with others to achieve best client outcomes. Demonstrated skill and knowledge in civil, corporate criminal law. Apply extensive experience working with local and state licensing agencies. Familiar with taxes, zoning, licensing and property rights and successfully represented corporate clients in high-profile civil litigation matters'
    }
  ]
  const displayContent = lawyerSummary.map((summary) => {
    return  <SummaryBox 
    id={summary.id}
    content={summary.content}
    />
  });

  return(
    <ul className="SummaryDisplay">
    <h3>Summary:</h3>
    {displayContent}
  </ul>
  )
}
