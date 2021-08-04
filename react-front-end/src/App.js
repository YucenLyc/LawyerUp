import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       message: 'Click the button to load data!'
//     }
//   }

//   fetchData = () => {
//     axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
//     .then((response) => {
//       // handle success
//       console.log(response.data) // The entire response from the Rails API

//       console.log(response.data.message) // Just the message
//       this.setState({
//         message: response.data.message
//       });
//     }) 
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>{ this.state.message }</h1>
//         <button onClick={this.fetchData} >
//           Fetch Data
//         </button>        
//       </div>
//     );
//   }
// }
//Pages
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/404';
import clientRegister from './pages/clientRegister'
import lawyerRegister from './pages/lawyerRegister';
import ClientHomePage  from "./components/ClientHomePage/index"; 

import LawyerHome from './pages/LawyerHome';
import ClientHome from './pages/ClientHome';
import LawyerLoginPage from './pages/LawyerLoginPage';
import ClientLoginPage from './pages/ClientLoginPage';

import LawyerHomePage from './components/LawyerHomePage';
import OpenCases from './pages/OpenCases';
import ClosedCases from './pages/ClosedCases';
import AddNewCase from './pages/AddNewCase';
import CaseItem from './components/CaseItem';
import ProfileImg from './components/ProfileImg';
import lawyerProfileCard from './components/lawyerProfileCard';
import LawyerList from './components/LawyerList';
import LawyerListItem from './components/LawyerListItem';
import AssignCase from './components/AssignCase';


class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/clientRegister" component={clientRegister} /> 
        <Route exact path="/lawyerRegister" component={lawyerRegister} />
        <Route exact path="/lawyerHome" component={LawyerHome} />
        <Route exact path="/clientHome" component={ClientHome} />
        <Route exact path="/lawyerLoginPage" component={LawyerLoginPage} />
        <Route exact path="/clientLoginPage" component={ClientLoginPage} />
        <Route exact path="/clientHomePage" component={ClientHomePage} />
        <Route exact path="/lawyerHomePage" component={LawyerHomePage} />
        <Route exact path="/openCases" component={OpenCases} />
        <Route exact path="/closedCases" component={ClosedCases} />
        <Route exact path="/addNewCase" component={AddNewCase} />
        <Route exact path="/cases" component={CaseItem} />
        <Route exact path="/profileimg" component={ProfileImg} />
        <Route exact path="/lawyerProfileCard" component={lawyerProfileCard}/>
        <Route exact path="/LawyerList" component={LawyerList} />
        <Route exact path="/LawyerListItem" component={LawyerListItem} />
        <Route exact path="/AssignCase" component={AssignCase} />
        <Route component={NotFoundPage} /> 
        <Redirect to="/404" /> 
      </Switch>
    </Router>
    );
  }
}
export default App;
