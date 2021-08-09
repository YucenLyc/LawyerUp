import React, { useState } from "react";
import './lawyerDropdown.scss';


const locations = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['None', 'Vancouver', 'Calgary', 'Edmonton', 'Toronto', 'Saskatoon', 'Victoria'];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div onClick={(e) => {
              setSelected(option);
              setIsActive(false);
            }}
            className="dropdown-item"
            >
              {option}
            </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default locations;