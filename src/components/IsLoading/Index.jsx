import React from "react";
import "./style.css";

export default function Index() {
  return (
    <div className="isLoading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="item col-md-3 col-5 mx-1 my-4 p-2">
            <span></span>
            <span></span>
          </div>
          <div className="item col-md-3 col-5 mx-1 my-4 p-2">
            <span></span>
            <span></span>
          </div>
          <div className="item col-md-3 col-5 mx-1 my-4 d-md-flex d-none p-2">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
