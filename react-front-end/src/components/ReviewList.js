import React from 'react';
import './ReviewList.scss';

export default function ReviewList(props) {
  console.log('propssssss:::  ', props);
  return(
    <>
    <div className="review-box">
      <div className="review-date">
        <strong>Date:</strong> {new Date(props.date).toDateString()}
      </div>
      <div className="review-content">
      <strong>Review:</strong> {props.content}
      </div>
    </div>
    </>
  );
}