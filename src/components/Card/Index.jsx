import React from "react";

export default function Index() {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-info w-100">
        <div className="d-flex justify-content-between w-100">
          <span>name</span>
          <span>date</span>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="span">Quality</div>
          <div className="details">details</div>
        </div>
      </div>
    </div>
  );
}
