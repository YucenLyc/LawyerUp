import React, {useState} from 'react';
import './Card.css'

function Card() {
  const [name, setName] = useState('lawyer name');
  const [specialization, setSpecialization] = useState('lawyer specialization');
  const [summary, setSummary] = useState('Skilled Attorney in good standing with 3+ years of experience conducting thorough legal research and defending clients in medical malpractice and premises liability trials. ');

  return (
    <div className="Card">
      <div className="upper-container">
        <div className='image-container'>
          <img src="https://pbs.twimg.com/media/Crx9nxmWgAAl2BY?format=jpg&name=900x900" alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h4> { name } </h4>
        <h4> { specialization }</h4>
        <p> { summary }</p>
        <button className="visitProfileBtn">Visit Profile</button>
      </div>
    </div>
  )
}

export default Card;
