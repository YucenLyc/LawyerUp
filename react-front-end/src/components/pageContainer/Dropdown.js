import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default Dropdown;

function Dropdown({ title, items, type }) {
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
          {/* <p className="dd-header__title--bold">{title}</p> */}
          {/* <div className="search-container">
            <button class="search-btn" href="#">Law Category</button>
          </div> */}
          <div class="button">
            <div class="button__text">Search a Law Field...</div>

            <div class="button__wrapper">
              <div class="button__arrow"></div>
              <div class="button__border-circle"></div>
              <div class="button__mask-circle">
                <div class="button__small-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="dd-header__action">
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

