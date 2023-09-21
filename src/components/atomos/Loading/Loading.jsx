import React from "react";
import "./Loading.css";
import Pokeball from "../../../images/pokeball.svg";

function Loading() {
  return (
    <div className="loading-container">
      <img src={Pokeball} className="loading" />
    </div>
  );
}

export default Loading;
