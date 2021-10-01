import React from "react";
import propTypes from "prop-types";
import "./style.css";

export default function Index({ title }) {
  return (
    <div className="title">
      <span></span>
      <span>{title}</span>
    </div>
  );
}

Index.prototype = {
  title: propTypes.string,
};
