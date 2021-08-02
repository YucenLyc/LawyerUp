import React from 'react';
import Header from './Header';

export default function LawyerLoginPage() {

  return(
    <div>
      <Header />
      <div class="loginForm">
      <form>
        <div class="row mb-3">
          <label for="username" class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-10">
            <input type="username" class="form-control" id="username" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="password" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      </div>
    </div>
  );
}