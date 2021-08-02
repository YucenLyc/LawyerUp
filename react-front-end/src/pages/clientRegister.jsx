import React from "react";
//import image if you want 
import Button from 'react-bootstrap/Button';

const ClientRegister = () => {

    return (
    <div className="base-container">
      <div className="header"><h1>Registration</h1></div>
      <div className="content">
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username </label>
          <input type="text" name="username" placeholder />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email </label>
          <input type="email" name="email" placeholder />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password </label>
          <input type="password" name="password" placeholder />
        </div>
        <div className="form-group">
        <label htmlFor="password confirmation">Password Confirmation </label>
          <input type="password confirmation" name="password confirmation" placeholder />
          <Button variant="outline-primary">Submit</Button>{' '}
        </div>
      </div>
    </div>
    )
  
}

export default ClientRegister;