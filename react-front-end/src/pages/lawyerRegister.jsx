import React from "react";
import Button from 'react-bootstrap/Button';
import { PageContainer } from "../components/pageContainer";
import ProfileImg from "../components/ProfileImg";

const LawyerRegister = () => {

    return (
    <PageContainer>
    <div className="base-container">
      <div className="header"><h1>Lawyer Registration</h1></div>
      <div className="content">
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username </label>
          <input type="text" name="username" placeholder />
        </div>
        <div className="form-group">
        <label htmlFor="location">Location </label>
          <input type="location" name="location" placeholder />
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
        <div className="form-group">
        <label htmlFor="specialization">Specialization </label>
          <input type="specialization" name="specialization" placeholder />
        </div>
        <div className="form-group">
        <label htmlFor="consultationRate">A short career summary (under 150 words): </label>
          <input type="lawyerSummary" name="lawyerSummary" placeholder />
        </div>
        <div className="form-group">
        <label htmlFor="consultationRate">Your Consultation Rate</label>
          <input type="consultationRate" name="consultationRate" placeholder />
        </div>
          <Button variant="outline-primary">Submit</Button>{' '}
        </div>
      </div>
      <div className="image">
        <ProfileImg />
      </div>
    </div>
    </PageContainer>
    )
}

export default LawyerRegister;