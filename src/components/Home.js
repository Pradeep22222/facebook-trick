import React from "react";
import Button from "react-bootstrap/Button";
import hearts from ".././assets/hearts.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="home_content">
        <div>
          <h1 className="welcome text-center ">
            Welcome to the couple Q & A game!!
          </h1>
        </div>
        <div className="centering_horizontal pt-5 mb-3">
          <ul className="home_list">
            <li>Answer your your memories....</li>
            <li>Answer the key days....</li>
            <li>Answer the favourites....</li>
            <li>End with dare....</li>
          </ul>
        </div>
        <div className="next_div">
          <Link to="connection">
            <Button variant="success" size="sm" className="next">
              Next
            </Button>
          </Link>
        </div>
      </div>
      <img src={hearts} className="hearts"></img>
    </div>
  );
};
