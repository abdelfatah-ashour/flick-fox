import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Index({ span, h2 }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 Top-Section">
      <span>{span}</span>
      <h2>{h2}</h2>
    </div>
  );
}

Index.prototype = {
  span: PropTypes.string,
  h2: PropTypes.string,
};
