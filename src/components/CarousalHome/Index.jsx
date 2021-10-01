import React from "react";
import Slider from "react-slick";
import ProtoTypes from "prop-types";
import { MdLanguage } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import "./style.css";

export default function Index({ items }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    style: {
      margin: "0 32px",
    },
  };

  return (
    <Slider {...settings} className="slider">
      {items?.map((item) => {
        const {
          poster_path,
          title,
          release_date,
          vote_average,
          original_language,
        } = item;

        return (
          <div className="Slide-carousal" key={item.id}>
            <div className="image-poster">
              <img
                src={`${process.env.REACT_APP_API_IMAGE}${poster_path}`}
                alt={title}
                loading="lazy"
              />
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-start w-100 p-3">
                <span>{title}</span>
                <span>{new Date(release_date).getFullYear()}</span>
              </div>
              <div className="col-12 d-flex justify-content-between align-items-start w-100 p-3">
                <div className="span">
                  <AiFillStar /> {vote_average}
                </div>
                <div className="details">
                  <MdLanguage /> {original_language}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

Index.prototype = {
  items: ProtoTypes.array,
};
