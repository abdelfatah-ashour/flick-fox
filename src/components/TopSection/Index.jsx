import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Index({ span, h3 }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 Top-Section">
      <span>{span}</span>
      <h3>{h3}</h3>
    </div>
  );
}

Index.prototype = {
  span: PropTypes.string,
  h2: PropTypes.string,
};
