import React from 'react';
import '../styles/header.css';
import Info from '../components/info';

const Header = (props) => {
  return (
    <header class="ui-header">
      <span>Lawyer Up</span>
      <span>
        <span class="sign-up-text">
          <Info value={props.value} />
        </span>
        
      </span>
    </header>
  );
};

export default Header;