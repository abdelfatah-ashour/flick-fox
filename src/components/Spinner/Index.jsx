import React from "react";
import "./style.css";

export default function Index() {
  return (
    <div className="spinner d-flex flex-column justify-content-center align-items-center">
      <div className="sp sp-vortex"></div>
      <span className="">loading...</span>
    </div>
  );
}
