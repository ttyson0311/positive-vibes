import React, { Component } from "react";
import "./Card.css";

const Card = ({ quote, author }) => {
  return (
    <div className="w-20 tc dib br4 pa3 ma4 grow bw1 shadow5">
      {/* <img className="pic-size" alt="robots" src={require("./img1.jpg")} /> */}
      <p class="dib quote">{quote}</p>
      <p> {author}</p>
    </div>
  );
};
export default Card;
