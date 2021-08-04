import React from "react";
import "./Review.scss";


export default function Review(props) {

  return (
    <main className="review-case" >
      <h3>Leave a Review For Your Lawyer Here!</h3>
      <div >
          <input className="review-textarea" placeholder="Would you recommend this lawyer to a friend? " />
        </div>
    </main>
  )
}