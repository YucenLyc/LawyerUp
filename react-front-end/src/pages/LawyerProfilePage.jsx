import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import SummaryDisplay from '../components/summaryDisplay';
import ReviewList from '../components/ReviewList';
import { Link } from 'react-router-dom';
import './LawyerProfilePage.scss';

const axios = require('axios');

export default function LawyerProfilePage() {
  const { lawyer_id } = useParams();
  const [lawyers, setLawyers] = useState([]);
  const [reviews, setReviews] = useState([]);


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
  
    return lawyers.find(e => e.id === Number(lawyer_id)) || {};
    
  }
  
  const lawyerResult = filterByLawyerId(lawyer_id);

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
  
  console.log("afsdfasf::::  ", lawyerResult.speciality)
  return (
    <>
    <Header />
    <div className="heading-container">
      <div className="name-and-profileImage">
        <div>
          <h2 className="lawyer-name">{lawyerResult.name}</h2>
        </div>
        <div className="profileImage">
        <img src="https://pbs.twimg.com/media/Crx9nxmWgAAl2BY?format=jpg&name=900x900" alt="" height="200px" width="200px" />
        </div>
      </div>
        <br></br>
      <div className="speciality-and-sendMessage">
        <div className="speciality-list">
          <h4>Specialization:</h4>
          <div className="specialization">
          {lawyerResult.speciality}
          </div>
        </div>
        <div className="send-message">
        <Link>Send Message</Link>
        </div>
      </div>
      </div>
      <div className="content-container">
        <div>
        <h4>My Self</h4>
        <h5>{lawyerResult.profile}</h5>
        </div>
      <br></br>

        <div className="rate">
        <h5>Consultation Rate:</h5>
        <strong>$ {lawyerResult.rate}</strong>
      </div>
      </div>
      
      <div className="reviews">
        <h4>Review From Client</h4>
        {reviewList}
      </div>
    <br></br>
      <div className="review-page">
        <Link to={`/review/${lawyer_id}`}>Add Review</Link>
      </div> 
    <br></br>
       
    {/* <SummaryDisplay /> */}
   
     
    </>
  )
}