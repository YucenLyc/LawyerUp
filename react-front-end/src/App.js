import React, { Component } from 'react';
import './App.scss';
import Approute from './AppRoute';

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
//import MessageChatBox from './components/message';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isChatBoxVisible: false};
    this.toggleChatBoxVisible = this.toggleChatBoxVisible.bind(this);
    this.test = () => {alert("This is the Alert!!")};
  }
  

  toggleChatBoxVisible = () => {
    this.setState({ isChatBoxVisible: !this.state.isChatBoxVisible })
  }
  
  // test = () => {
  //   alert("This is the Alert!!");
  // }
  
  
  render() {
    return (

      
        <Router>
          <Switch>
            <Approute exact path="/" component={LandingPage}/>
            <Approute exact path="/clientRegister" component={clientRegister} />
            <Approute exact path="/lawyerRegister" component={lawyerRegister} />
            <Approute exact path="/lawyerHome" component={LawyerHome} />
            <Approute exact path="/clientHome" component={ClientHome} />
            <Approute exact path="/lawyerLoginPage" component={LawyerLoginPage} />
            <Approute exact path="/clientLoginPage" component={ClientLoginPage} />
            <Approute exact path="/clientHomePage" component={ClientHomePage} />
            <Approute exact path="/lawyerHomePage" component={LawyerHomePage} />
            <Approute exact path="/closedCases/:case_id" component={ClosedCase} />
            <Approute exact path="/closedCases" component={ClosedCases} />
            <Approute exact path="/addNewCase" component={AddNewCase} />
            <Approute exact path="/cases" component={CaseItem} />
            <Approute exact path="/profileimg" component={ProfileImg} />
            <Approute exact path="/lawyerProfileCard" component={lawyerProfileCard}/>
            <Approute exact path="/LawyerList" component={LawyerList} />
            <Approute exact path="/LawyerListItem" component={LawyerListItem} />
            <Approute exact path="/AssignCase" component={AssignCase} />
            <Approute exact path="/AllCaseList" component={AllCaseList} />
            <Approute exact path="/Review" component={Review} />
            <Approute exact path="/Review/:lawyerId" component={Review} />
            <Approute exact path="/SameLawyerCaseList" component={SameLawyerCaseList} />
            <Approute exact path="/ClientLawyerListView/:lawType" component={ClientLawyerListView} />
            <Approute exact path="/definedLawField" component={definedLawField} />
            <Approute exact path="/AllDefinedLawlist" component={AllDefinedLawlist} />
            <Approute exact path="/summaryBox" component={summaryBox} />
            <Approute exact path="/lawyerProfilePage" component={LawyerProfilePage} />
            <Approute exact path="/lawyerhomepage/:lawType" component={LawyerHomePage} />
            <Approute exact path="/lawyerprofilePage/:lawyer_id" component={LawyerProfilePage} />
            {/* <Route exact path="/message" component={MessageChatBox} /> */}

            <Approute component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      
       
     

    );
  }
}
export default App;
