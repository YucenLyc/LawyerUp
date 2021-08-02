import React from 'react';
import Header from './Header';

export default function LandingPage({ history }) {

  return(
    <div>
      <Header />
      <div>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/lawyerHome')}>Lawyer</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/clientHome')}>Client</button>
      </div>
    </div>     
  );
}