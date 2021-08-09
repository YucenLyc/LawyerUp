import React, {useState} from "react";
// import classnames from 'classnames/bind';
import Card from "../components/DynamicCard";
import ProfilePopUp from './profilePopUp';
import "./LawyerListItem.scss";

export default function LawyerListItem(props) {
  
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    // <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name)}>
    //   <h2>{props.name}</h2>
    //   <h3>{formatSpots(props.spots)}</h3>
    // </li>
    <div onClick={togglePopup} >
      <li className="LawyerListItem" >
        <h3>Lawyer Name: {props.name}</h3>
        <h4>Specialization: {props.specialization.join(', ')}</h4>
        <h4>Location: {props.location}</h4>
        <h4>Hourly Rate: {props.rating}</h4>
        <h4>Experience: {props.experience} years</h4>
        <h4>Review: {props.review}</h4>
        <div>
        {isOpen && <ProfilePopUp 
        content={<>
        <Card id={props.id} name={props.name} specialization={props.specialization} profile={props.profile}/>
        </>} 
        handleClose={togglePopup}
        />}
          
        </div>
      </li>
    </div>
  );
}