import React, { useState } from "react";

const years_of_experience = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['None', '1 - 3', '4 - 5', '6 - 9', '10 - 15', '15+'];

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

export default years_of_experience;