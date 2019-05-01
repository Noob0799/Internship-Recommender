import React from "react";
import "./Head.css";
class Head extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Internship Recommender</h1>
        <hr />
        <p>
          Enter your details and preferred choices below to know the best
          company suited for you.
        </p>
      </div>
    );
  }
}
export default Head;
