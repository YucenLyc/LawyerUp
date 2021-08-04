// import { faJournalWhills } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";


import LawyerListItem from "./LawyerListItem";
import "./LawyerList.scss";

const axios = require('axios');

export default function LawyerList(props){

  const [lawyers, setLawyers] = useState([]);
  // const [lawyers, setLawyers] = useState({});
  
  useEffect(() => {
    axios.get("/api/lawyers").then(response => {
      console.log('response: ', response.data);
      setLawyers(response.data);
      // [{ 1: ... 2: ... }]
      // setLawyers({...response.data});
      console.log('lawyers: ', lawyers);
    });
  }, [])

  // const lawyers = props.lawyers;
  // const lawyers = [
  //   {name: "John", specialization: "Family Law", rating: 4, review : "John is good."},
  //   {name: "Jane", specialization: "Criminal Law", rating: 5, review : "Jane is good."},
  //   {name: "Donkey", specialization: "Any Law", rating: 1, review : "Donkey is terrible."}
  // ]

  console.log('lawyers: ', lawyers);

  const LawyersListItem = lawyers.map((lawyer) => {
    return <LawyerListItem 
      name={lawyer.name}
      specialization={lawyer.speciality[0]}
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