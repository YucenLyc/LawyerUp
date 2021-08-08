import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/404';
import clientRegister from './pages/clientRegister'
import lawyerRegister from './pages/lawyerRegister';
import ClientHomePage from "./components/ClientHomePage/index";

import LawyerHome from './pages/LawyerHome';
import ClientHome from './pages/ClientHome';
import LawyerLoginPage from './pages/LawyerLoginPage';
import ClientLoginPage from './pages/ClientLoginPage';
import LawyerHomePage from './components/LawyerHomePage';
import ClosedCase from './pages/ClosedCase';
import ClosedCases from './components/AllClosedCases';
import AddNewCase from './pages/AddNewCase';
import CaseItem from './components/CaseItem';
import ProfileImg from './components/ProfileImg';
import lawyerProfileCard from './components/lawyerProfileCard';
import LawyerList from './components/LawyerList';
import LawyerListItem from './components/LawyerListItem';
import AssignCase from './components/AssignCase';
import AllCaseList from './components/AllCaseList';
import Review from './components/Review';
import SameLawyerCaseList from './components/SameLawyerCaseList';
import ClientLawyerListView from './pages/ClientLawyerListView';
import definedLawField from './components/definedLawFieldBox';
import AllDefinedLawlist from './components/AllDefinedLawList';
import summaryBox from './components/summaryBox';
import LawyerProfilePage from './pages/LawyerProfilePage';
import MessageChatBox from './components/message';


class App extends Component {

//create a set of react state in order to store logged in user info 
//pass the appropriate info to messageChat 
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
            <Route exact path="/closedCases/:case_id" component={ClosedCase} />
            <Route exact path="/closedCases" component={ClosedCases} />
            <Route exact path="/addNewCase" component={AddNewCase} />
            <Route exact path="/cases" component={CaseItem} />
            <Route exact path="/profileimg" component={ProfileImg} />
            <Route exact path="/lawyerProfileCard" component={lawyerProfileCard}/>
            <Route exact path="/LawyerList" component={LawyerList} />
            <Route exact path="/LawyerListItem" component={LawyerListItem} />
            <Route exact path="/AssignCase" component={AssignCase} />
            <Route exact path="/AllCaseList" component={AllCaseList} />
            <Route exact path="/Review" component={Review} />
            <Route exact path="/SameLawyerCaseList" component={SameLawyerCaseList} />
            <Route exact path="/ClientLawyerListView/:lawType" component={ClientLawyerListView} />
            <Route exact path="/definedLawField" component={definedLawField} />
            <Route exact path="/AllDefinedLawlist" component={AllDefinedLawlist} />
            <Route exact path="/summaryBox" component={summaryBox} />
            <Route exact path="/lawyerProfilePage" component={LawyerProfilePage} />
            <Route exact path="/lawyerhomepage/:lawType" component={LawyerHomePage} />
            <Route exact path="/lawyerprofilepage/:lawyer_id" component={LawyerProfilePage} />
            <Route exact path="/message" component={MessageChatBox} />

            <Route component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
        
     

    );
  }
}
export default App;
