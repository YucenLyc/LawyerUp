import React from "react";
import "./Review.scss";
import Card from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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

export default function Review(props) {

return (
  <Card style={{ width: '30rem' }}>
  <Card.Body>
    <Card.Title className="title">Your Review</Card.Title>
    <Card.Text>
      <Form className="review-content">
        <textarea placeholder="Please give us your feedback on this lawyer"></textarea>
      </Form>
    </Card.Text>
    <Button variant="primary">Submit Review</Button>
  </Card.Body>
</Card>
)
}