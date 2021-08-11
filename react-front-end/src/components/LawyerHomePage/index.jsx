import React, { useEffect, useState } from 'react';
import Dropdown from '../pageContainer/Dropdown';
import '../pageContainer/Dropdown.scss'
import LawyerNavbar from '../pageContainer/LawyerHomeNavbar';
import AllCaseList from '../AllCaseList';
import { useParams } from "react-router-dom";
import MessageChatBox from "../message";


const axios = require('axios');

export default function LawyerHomePage(props) {

  //const {test} = props;

  const [isChatVisible, setIsChatVisible] = useState(false);



  const { lawType } = useParams();
  const [cases, setCases] = useState([])

  const [specialities, setSpecialities] = useState([]);
  useEffect(() => {
    axios.get("/api/specialities").then(response => {
      setSpecialities(response.data);
      console.log('specialities:', specialities);
    });
  }, [])

  useEffect(() => {
    axios.get("/api/opencases").then(response => {
      setCases(response.data);
      console.log('cases:', cases);
    });
  }, [])

  console.log('cases:', cases);
  const toggleChat = () => {
    if(!isChatVisible) {
      setIsChatVisible(true);
    }
    else {
      setIsChatVisible(false);
    }
  }
  return (
    <>
     <LawyerNavbar />
    { isChatVisible && <MessageChatBox /> } 
    <div className="container">
      {/* <button onClick={test}>TEST</button> */}
      <h2 className="title-lawyerHome" style={{ textAlign: 'center', fontFamily: 'Work Sans' }}>
        Lawyer {sessionStorage.name} Homepage {' '}
      </h2>
      <Dropdown title="Select A Category of Law" items={specialities} multiSelect />
      <AllCaseList chatToggleHandler={toggleChat} type="lawyer" lawType={lawType} cases={cases}/>   
    </div>
    </>
  );

}
