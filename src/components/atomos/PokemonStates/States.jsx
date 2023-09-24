import React from "react";
import "./States.css";
function States({ children, name }) {
  return (
    <div className={`state-container ${name}`}>
      <div className="state-content">{children}</div>
    </div>
  );
}

export default States;
