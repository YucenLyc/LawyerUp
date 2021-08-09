import React from 'react';
import './profilePopUp.scss';

const ProfilePopup = props => {
  return (
    <div className="profilePopup-box">
      <div className="profileBox">
        <span className="profileClose-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default ProfilePopup;