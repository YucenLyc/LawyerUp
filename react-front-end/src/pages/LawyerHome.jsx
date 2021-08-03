import React from 'react';
import Header from './Header';

const LawyerHome = ({ history }) => {
  return(
    <div>
      <Header />
      <div>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/lawyerRegister')}>Create Account</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/lawyerLoginPage')}>Log In</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/')}>Back</button>
      </div>
    </div>
  );
}

export default LawyerHome;