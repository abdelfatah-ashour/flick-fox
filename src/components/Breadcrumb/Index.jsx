import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";

export default function Index({ h2, target }) {
  return (
    <div className="Breadcrumb">
      <h2>{h2}</h2>
      <nav>
        <ol className="list-unstyled">
          <li>
            <Link to="/">home </Link>
          </li>
          <li>{" / " + target}</li>
        </ol>
      </nav>
    </div>
  );
}

Index.prototype = {
  h2: propTypes.string,
  target: propTypes.array,
};
