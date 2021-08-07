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

  // const onEmailChange = function (event) {
  //   setEmail(event.target.value);
  // };

  const onPasswordChange = function (event) {
    setPassword(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();
    if (email === "Egg Eggerson") {
      history.push('/clientHomePage');
    }
    
      // login(email, password);
      
  };

  // const verifyClient = (email, password) => {
  //   const url = "http://localhost:8000/clienthomepage";

  //   axios.get(url).then((res) => {
  //     if (user.email === email && user.password === password) {
  //       sessionStorage.setItem("token", user.id);
  //       sessionStorage.setItem("firstName", user.first_name);
  //       sessionStorage.setItem("lastName", user.last_name);
  //     }
  //   })
  // }

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
        {/* {user === false? <section verifyClient={verifyClient} /> : <div> </div>} */}
    </div>
    </div>
  );
  
  // return(
  //   <div>
  //     <Header />
  //     <div class="loginForm">
  //     <form>
  //       <div class="row mb-3">
  //         <label for="username" class="col-sm-2 col-form-label">Username</label>
  //         <div class="col-sm-10">
  //           <input type="username" class="form-control" id="username" />
  //         </div>
  //       </div>
  //       <div class="row mb-3">
  //         <label for="password" class="col-sm-2 col-form-label">Password</label>
  //         <div class="col-sm-10">
  //           <input type="password" class="form-control" id="password" />
  //         </div>
  //       </div>
  //       <button type="submit" class="btn btn-primary">Sign in</button>
  //     </form>
  //     </div>
  //   </div>
  // );
}

export default ClientLoginPage;