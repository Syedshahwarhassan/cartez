// import React from 'react'

import { Link, Outlet } from "react-router-dom";

const Review = () => {


  return (
    <div>
      <div className="mt-5">
        <h3 style={{ textAlign: "center" }}>Customer Reviews</h3>
        <div className="review">
          <div className="star-review">
            <h2>☆☆☆☆☆</h2>
            <h5>Be the first to write a review</h5>
          </div>
          <div className="line"></div>
          <div className="review-btn-div">
            <Link to={"write"}>
              <button className="review-btn">Write a review</button>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Review;
