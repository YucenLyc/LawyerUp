// import { faJournalWhills } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

import LawyerListItem from "./LawyerListItem";
import "./LawyerList.scss";

const axios = require('axios');

export default function LawyerList(props){
  const lawType = props.lawType;
  const [lawyers, setLawyers] = useState([]);
  const location = props.location == "Choose One" ? null : props.location;
  const rate = props.rate == "Choose One" ? null : props.rate;
  const year = props.year == "Choose One" ? null : props.year;

  // const [lawyers, setLawyers] = useState({});
  useEffect(() => {
    axios.get("/api/lawyers").then(response => {
      setLawyers(response.data);
      // [{ 1: ... 2: ... }]
      // setLawyers({...response.data});
    });
  }, [])

  // const lawyers = props.lawyers;
  // const lawyers = [
  //   {name: "John", specialization: "Family Law", rating: 4, review : "John is good."},
  //   {name: "Jane", specialization: "Criminal Law", rating: 5, review : "Jane is good."},
  //   {name: "Donkey", specialization: "Any Law", rating: 1, review : "Donkey is terrible."}
  // ]
  console.log('lawyers: ', lawyers);
  let filtered;

  const findBySpeciality = (field) => {
    let result = [];
    for (let lawyer of lawyers) {
      if (lawyer.speciality.find(elm => elm === field)) {
        result.push(lawyer);
      }
    }
    return result;
  }

  const findByLocation = (location) => {
    let result = [];
    for (let lawyer of findBySpeciality(lawType.split('-').join(' '))) {
      if (lawyer.city == location) {
        result.push(lawyer);
      }
    }
    return result;
  }

  const sortByRate = (sort) => {
    let result;
    if (sort == "High-Low") {
      let temp = findBySpeciality(lawType.split('-').join(' '));
      result = temp.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
    } else if (sort == "Low-High") {
      let temp = findBySpeciality(lawType.split('-').join(' '));
      result = temp.sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate));
    }
    return result;
  }

  const sortByYearOfExperience = (year) => { 
    let result = [];
    const years = year.split(' - ');
    for (let lawyer of findBySpeciality(lawType.split('-').join(' '))) {
      if (lawyer.years_of_experience >= parseInt(years[0]) && lawyer.years_of_experience <= parseInt(years[1])) {
        result.push(lawyer);
      }
    }
    return result;
  }
  

  if (location != null) {
    filtered = findByLocation(location);
  } else if (rate != null) {
    filtered = sortByRate(rate);
  } else if (year != null) {
    filtered = sortByYearOfExperience(year);
  } else {
    filtered = findBySpeciality(lawType.split('-').join(' '));  
  }



  const LawyersListItem = filtered.map((lawyer) => {
    return <LawyerListItem 
      id={lawyer.id}
      name={lawyer.name}
      specialization={lawyer.speciality}
      location={lawyer.city}
      rating={lawyer.rate}
      experience={lawyer.years_of_experience}
      review={lawyer.review}
      profile={lawyer.profile}
    />
  });
  
  return(
    <ul className="LawyerList">
      <h3>Our Lawyers:</h3>
      {LawyersListItem}
    </ul>
  )
}