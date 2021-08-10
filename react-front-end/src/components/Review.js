import React, { useState } from "react";
import "./Review.scss";
import Card from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useHistory } from 'react-router-dom';

const axios = require('axios');

// export default function Review(props) {

//   return (
//     <main className="review-case" >
//       <h3>Leave a Review For Your Lawyer Here!</h3>
//       <div >
//           <input className="review-textarea" placeholder="Would you recommend this lawyer to a friend? " />
//         </div>
//     </main>
//   )
// }

export default function Review({match}) {
  const history = useHistory();
  const { lawyerId } = useParams();
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
      history.push(`/lawyerprofilepage/${lawyerId}`);
    });
  }

  return (
    <div className="reviewcomponent">
      <div className="reviewtitle">Add Your Review</div>
      <div>
        <Form className="reviewcontent" onSubmit={(e) => {e.preventDefault();}}>
          <textarea placeholder="Please give us your feedback on this lawyer" onChange={(e) => setContent(e.target.value)}></textarea>
          <button className="submitreview" type="submit" onClick={submitReview} variant="primary"><b>Submit Review</b></button>
        </Form>
      </div>
    </div>
  )

}