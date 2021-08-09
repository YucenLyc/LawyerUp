import React from 'react';
import './profilePopUp.scss';

const ProfilePopup = props => {
  return (
    <div className="profilePopup-box">
      <div className="profileBox">
        {props.content}
      </div>
    </div>
  );
};
 
export default ProfilePopup;