import React from "react";
import propTypes from "prop-types";
import { BsFillPlayFill } from "react-icons/bs";
import "./style.css";

export default function Index({ url }) {
  return (
    <a
      className="WatchNow_Btn"
      href={url}
      aria-label="watch promo movie in youtube"
      target="_blank"
      rel="noreferrer">
      <BsFillPlayFill /> watch now
    </a>
  );
}

Index.prototype = {
  url: propTypes.string,
};
