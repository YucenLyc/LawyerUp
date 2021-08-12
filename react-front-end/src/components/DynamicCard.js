import React, {useState } from 'react';
import './DynamicCard.scss';
import { Link } from 'react-router-dom';
function Card(props) {
  return (
    <div className="Card">
      <div className="uppercontainer">
        <div className='image-container'>
          <img src={props.image ? props.image : '/images/defaultProfile.jpeg'} alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h4> { props.name } </h4>
        <h4> { props.specialization.join(', ') }</h4>
        <p> { props.profile }</p>
        <Link to={`/lawyerprofilepage/${props.id}`}>View</Link>
      </div>
    </div>
  )
}

export default Card;
