import React from 'react'
import ReactStars from 'react-rating-stars-component';
import profilePng from "../../images/Profile.png";
import { Rating } from "@material-ui/lab";



function ReviewCard({ review }) {
    const options = {        // material UI
        value: review.rating,
        readOnly: true,
        precision: 0.5, 
      };
      // const options = {      // react Star
      //   edit:false,
      //   color:"rgba(20,20,20,0.1)",
      //   activeColor:"tomato",
      //   size:window.innerWidth <600 ? 20:25,
      //   value:review.ratings,
      //   isHalf:true
      //  }
  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <h1>{review.name}</h1>
      {/* <Rating {...options} /> */}
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  )
}

export default ReviewCard