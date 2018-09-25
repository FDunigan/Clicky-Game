import React from "react";
import Jumbotron from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import "./App.css";
import Title from "./components/Title/Title";


const App = () => (
  <div className="container-fluid mainContainer">
    <Title />
    <Wrapper /> 
  </div>
);

export default App;
