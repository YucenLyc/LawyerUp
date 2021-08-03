import React from "react";
// import classnames from 'classnames/bind';

import "./LawyerListItem.scss";

export default function LawyerListItem(props) {


  return (
    // <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name)}>
    //   <h2>{props.name}</h2>
    //   <h3>{formatSpots(props.spots)}</h3>
    // </li>
    <li className="LawyerListItem" onClick={() => props.onClick}>
      <h3>Lawyer Name: {props.name}</h3>
      <h4>Specialization: {props.specialization}</h4>
      <h4>Rating: {props.rating}</h4>
      <h4>Review: {props.review}</h4>
    </li>
  );
}