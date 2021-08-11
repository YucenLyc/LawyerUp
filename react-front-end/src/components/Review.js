import React, { useState } from "react";
import "./Review.scss";
import Card from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useHistory } from 'react-router-dom';


const axios = require('axios');

export default function Review(props) {
  const history = useHistory();
  const lawyerId = props.lawyer_id;
  const [content, setContent] = useState('');

  const submitReview = () => {
    axios.post("/api/reviews", {
      lawyer_id: lawyerId,
      client_id: null,
      date: new Date().toDateString(),
      content: content,
    }).then(response => {
      console.log();
      console.log('response: ', response);
      props.addReview(response.data)
      // history.push(`/lawyerprofilepage/${lawyerId}`);
    });
  }

  return (
    <div className="reviewcomponent">
      <div className="reviewtitle">Add Your Review for {props.lawyer}</div>
      <div>
        <Form className="reviewcontent" onSubmit={(e) => {e.preventDefault();}}>
          <textarea placeholder="Please give us your feedback on this lawyer" onChange={(e) => setContent(e.target.value)}></textarea>
          <button className="submitreview" type="submit" onClick={submitReview} variant="primary"><b>Submit Review</b></button>
        </Form>
      </div>
    </div>
  )

}