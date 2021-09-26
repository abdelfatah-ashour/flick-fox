import React from "react";
import propTypes from "prop-types";
import { Helmet } from "react-helmet";

export function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

SEO.prototype = {
  title: propTypes.string,
  description: propTypes.string,
};
