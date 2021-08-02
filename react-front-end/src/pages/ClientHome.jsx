import React from 'react';
import Header from './Header';

export default function ClientHome({ history }) {

  return(
    <div>
      <Header />
      <div>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/clientCreate')}>Create Account</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/clientLoginPage')}>Log In</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/')}>Back</button>
      </div>
    </div>
  );
}
