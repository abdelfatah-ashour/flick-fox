import React from "react";
import propTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import "./style.css";

export default function Index(props) {
  const {
    original_title,
    poster_path,
    release_date,
    vote_average,
    original_language,
    name,
    first_air_date,
  } = props.item;

  return (
    <div className="Card overflow-hidden">
      <div className="Card-image overflow-hidden">
        <img
          src={`${process.env.REACT_APP_API_IMAGE}${poster_path}`}
          alt={original_title || name}
          loading="lazy"
        />
      </div>
      <div className="Card-info w-100 p-2 d-flex flex-column justify-content-start align-items-start h-25">
        <div className="d-flex justify-content-between w-100 mb-3">
          <span>{original_title || name}</span>
          <span>
            {(release_date || first_air_date) &&
              new Date(release_date || first_air_date).getFullYear()}
          </span>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="span">
            <AiFillStar /> {vote_average}
          </div>
          <div className="details">
            <MdLanguage /> {String(original_language).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}

Index.prototype = {
  item: propTypes.object,
};
