import React, { useState, useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import Header from './Header';
import './LandingPage.scss';
import { useHistory } from 'react-router-dom';

const LandingPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);
  const [user, setUser] = useState("");
  // const history = useHistory();

  const onPasswordChange = function (event) {
    setPassword(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();
    if (email === "Egg Eggerson") {
      history.push('/clientHomePage');
    }
  };


  return(
    <>
      <Header value={user}/>
      <div className="landing-body">
        <div className="user-options">
          <div className="user-type">
            <button type="button" class="btn btn-primary btn-lg" >Lawyer</button>
            <button type="button" class="btn btn-primary btn-lg" >Client</button>
          </div>
        </div>    
        <div className="form-body">
          <form className="login-form" onSubmit={onSubmit}>
            <div className="user-input">
              <div className="userpass">
                <div>Username:</div>
                <input type="text" name="login"
                  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username"
                    />
              </div>
              <div className="userpass">
                <div>Password:</div>
                <input type="password" name="password"
                  value={password} placeholder="Password"
                  onChange={onPasswordChange} />
              </div>
            </div>
            <div className="buttons">
              <div className="submit">
                <input onClick={() => setUser(email)} type="submit" name="commit" value="Login" />
              </div>
              <div className="sign-up">
                <input onClick={() => setUser(email)} type="submit" name="commit" value="Sign Up" />
              </div>
            </div>
          </form>
            {/* {user === false? <section verifyClient={verifyClient} /> : <div> </div>} */}
        </div>
      </div>
    </> 
  );
}

export default LandingPage;