import React from 'react';
import Header from './Header';

export default function LawyerHome({ history }) {
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
