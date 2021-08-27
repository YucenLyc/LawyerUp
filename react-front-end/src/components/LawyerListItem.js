import React, {useState} from "react";
import Card from "../components/DynamicCard";
import ProfilePopUp from './profilePopUp';
import "./LawyerListItem.scss";

export default function LawyerListItem(props) {
  
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div onClick={togglePopup} >
      <li className="LawyerListItem" >

        <div className="lawyerlistitemheader">
          <h4>Lawyer Name: {props.name}</h4>
          <h6><b>{props.experience}</b> yrs</h6>
        </div>
        <h5 className="specialization-text">Specialization: {props.specialization.join(', ')}</h5>
        <div className="lawyerlistitemfooter">
          <h5 className="location-text">Location: {props.location}</h5>
          <h6><b>${props.rating}</b>/hr</h6>
        </div>

        <div>
        {isOpen && <ProfilePopUp 
        content={<>
        <Card id={props.id} name={props.name} specialization={props.specialization} profile={props.profile} image={props.image}/>
        </>} 
        handleClose={togglePopup}
        />}
          
        </div>
      </li>
    </div>
  );
}