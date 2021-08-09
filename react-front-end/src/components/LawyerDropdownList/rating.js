import React, { useState } from "react";

const rating = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['None', '100 - 150', '151 - 200', '201 - 250', '251 - 300'];
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

export default rating;