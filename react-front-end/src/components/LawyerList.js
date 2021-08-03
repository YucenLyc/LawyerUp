import { faJournalWhills } from "@fortawesome/free-solid-svg-icons";
import React from "react";


import LawyerListItem from "./LawyerListItem";
import "./LawyerList.scss";


export default function LawyerList(props){

  // const lawyers = props.lawyers;
  const lawyers = [
    {name: "John", specialization: "Family Law", rating: 4, review : "John is good."},
    {name: "Jane", specialization: "Criminal Law", rating: 5, review : "Jane is good."},
    {name: "Donkey", specialization: "Any Law", rating: 1, review : "Donkey is terrible."}
  ]
  const LawyersListItem = lawyers.map((lawyer) => {
    return <LawyerListItem 
      name={lawyer.name}
      specialization={lawyer.specialization}
      rating={lawyer.rating}
      review={lawyer.review}
      onClick={props.onClick}
    />
  });

  return(
    <ul className="LawyerList">
      <h3>Our Lawyers:</h3>
      {LawyersListItem}
    </ul>
  )
}