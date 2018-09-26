import React from "react";
import "./Title.css";

const Title = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container text-center">
      <h1 className="display-4">The Simpsons Clicky Game!</h1>
      <p className="lead">
        Click on any image to earn points, but click on an image more than once
        and you lose!
      </p>
    </div>
  </div>
);

export default Title;
