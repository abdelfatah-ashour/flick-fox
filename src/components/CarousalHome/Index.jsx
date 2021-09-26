import React from "react";
import Slider from "react-slick";
import ProtoTypes from "prop-types";

export default function Index({ items }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
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
      {items.map((item) => {
        return (
          <div key={item} className="slide">
            <h3>slide {item}</h3>
          </div>
        );
      })}
    </Slider>
  );
}

Index.prototype = {
  items: ProtoTypes.array,
};
