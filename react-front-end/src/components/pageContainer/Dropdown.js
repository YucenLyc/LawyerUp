import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default Dropdown; 

function Dropdown({ title, items, type, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

    return (
      <div className="dd-wrapper">
        <div
          tabIndex={0}
          className="dd-header"
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <div className="dd-header__title">
            <p className="dd-header__title--bold">{title}</p>
          </div>
          <div className="dd-header__action">
            <p>{open ? 'Close' : 'Open'}</p>
          </div>
        </div>
        {open && (
          <ul className="dd-list">
            {items.map(item => (
              <li className="dd-list-item" key={item.id}>
                <Link to={type === "client" ? `/clientlawyerlistview/${item.name.split(' ').join('-')}` : `/lawyerhomepage/${item.name.split(' ').join('-')}`} onClick={() => toggle(!open)}>
                  <button>
                    <span>{item.name}</span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

