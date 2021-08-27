import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from '../components/ReviewList';
import './LawyerProfilePage.scss';
import MessageChatBox from '../components/message';
import CasePopup from '../components/CasePopUp/CasePopup';
import Review from '../components/Review';
import Navbar from '../components/ClientHomeNavbar';


const axios = require('axios');

const LAWYER_DEFAULT_VALUE = {};

export default function LawyerProfilePage() {
  const { lawyer_id } = useParams();
  const [lawyers, setLawyers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [isChatVisible, setIsChatVisible] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    axios.get("/api/lawyers").then(response => {
      setLawyers(response.data);
    });
  }, [])

  useEffect(() => {
    axios.get("/api/reviews").then(response => {
      console.log(response.data);
      setReviews(response.data);
    });
  }, []);

  console.log("reviews:   ",reviews);
  console.log('lawyers= ', lawyers);
  console.log('lawyer_id', lawyer_id);

  const filterByLawyerId = (lawyer_id) => {
  
    return lawyers.find(e => e.id === Number(lawyer_id)) || LAWYER_DEFAULT_VALUE;
    
  }
  
  const lawyerResult = filterByLawyerId(lawyer_id);

  console.log('lawyer: ', lawyerResult);
  console.log('specialities: ', lawyerResult.speciality);

  const getReviewByLawyerId = (lawyer_id) => {
    let result = [];
    
    for (let review of reviews) {
      if (review.lawyer_id == lawyer_id) {
        result.push(review);
      }
    }
    return result;
  }

  const reviewResult = getReviewByLawyerId(lawyer_id);
  
  const reviewList = reviewResult.map((review) => {
    return <ReviewList 
    date={review.date}
    content={review.content}
  />
  });
  
  const toggleChat = () => {
    if(!isChatVisible) {
      setIsChatVisible(true);
    }
    else {
      setIsChatVisible(false);
    }
  }

  const addReview = (newReview) => {
    setReviews(prev => ([ ...prev, newReview]));
    togglePopup();
  }
  return (
    <>
    <Navbar />
    <div className="lawyer-profile-container">
      <div className="heading-container">
        <div className="name-and-profileImage">
          <div className="lawyer-name">
            <h2>{lawyerResult.name}</h2>
          </div>
          <div className="profileImage">
            <img src={lawyerResult.image ? lawyerResult.image : '/images/defaultProfile.jpeg'} alt="" height="150px" width="150px" />
          </div>
        </div>
          <br></br>
        <div className="speciality-and-sendMessage">
          <div className="speciality-list">
            <h4 className="specialization-tag">Specialization:</h4>
          <div className="specialization">
            {lawyerResult.speciality && lawyerResult.speciality.join(', ')}
          </div>
        </div>
          <div className="send-message">
            <button onClick={toggleChat} className="messageBtn">Message This Lawyer</button>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div>
          <h4 className="about-me">About Me</h4>
          <h5 className="lawyer-summary">{lawyerResult.profile}</h5>
        </div>
        <br></br>
        <div className="rate">
          <h4 className="consultation-rate">Consultation Rate:</h4>
          <strong>$ {lawyerResult.rate}</strong>
        </div>
      </div>
      <div className="reviews">
        <h4 className="review-tag">Review From Client</h4>
        {reviewList}
      </div>
        { isChatVisible && <MessageChatBox /> } 
      <br></br>
      <div>
        {isOpen && <CasePopup
           content={
            <Review lawyer_id={lawyer_id} lawyer={lawyerResult.name} client={sessionStorage.name} client_id={sessionStorage.token} addReview={addReview} />
          }
            handleClose={togglePopup}
        />}
        <button className="review-page" onClick={() => setIsOpen(!isOpen)}>
          <b className="btn-review">Add Review</b>
        </button>
      </div> 
      <br></br>
    </div>
    </>
  )
}