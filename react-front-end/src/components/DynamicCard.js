import React, {useState } from 'react';
import './DynamicCard.scss';
import { Link } from 'react-router-dom';
function Card(props) {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className='image-container'>
          <img src="https://pbs.twimg.com/media/Crx9nxmWgAAl2BY?format=jpg&name=900x900" alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h4> { props.name } </h4>
        <h4> { props.specialization }</h4>
        <p> { props.profile }</p>
        <Link to={`/lawyerprofilepage/${props.id}`}>View</Link>
      </div>
    </div>
  )
}

export default Card;
