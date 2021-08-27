import React, { useState, useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import Header from './Header';
import { useHistory } from 'react-router-dom';


const ClientLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);
  const [user, setUser] = useState("");

  const history = useHistory();

  const onPasswordChange = function (event) {
    setPassword(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();
    if (email === "Egg Eggerson") {
      history.push('/clientHomePage');
    }
      
  };

  
  return (
    <div>
     <Header value={user}/>
    <div className="login">
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="login"
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username"
             />
        </p>
        <p>
          <input type="password" name="password"
            value={password} placeholder="Password"
            onChange={onPasswordChange} />
        </p>
        <p className="submit">
          <input onClick={() => setUser(email)} type="submit" name="commit" value="Login" />
        </p>
      </form>
    </div>
    </div>
  );
}

export default ClientLoginPage;