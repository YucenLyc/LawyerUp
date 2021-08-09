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

export default function Review() {
  const history = useHistory();
  const { lawyer_id } = useParams();
  const [content, setContent] = useState('');

  const submitReview = () => {
    axios.post("/api/reviews", {
      lawyer_id: lawyer_id,
      client_id: null,
      date: new Date().toDateString(),
      content: content,
    }).then(response => {
      console.log();
      console.log('response: ', response);
      history.push(`/lawyerprofilepage/${lawyer_id}`);
    });
  }

return (

  <Card style={{ width: '30rem' }}>
  <Card.Body>
    <Card.Title className="title">Your Review</Card.Title>
    <Card.Text>
      <Form className="review-content" onSubmit={(e) => {e.preventDefault();}}>
        <textarea placeholder="Please give us your feedback on this lawyer" onChange={(e) => setContent(e.target.value)}></textarea>
        <Button type="submit" onClick={submitReview} variant="primary">Submit Review</Button>
      </Form>
    </Card.Text>
  </Card.Body>
</Card>
)
}