import React from "react";
import ReactPaginate from "react-paginate";
import propTypes from "prop-types";
import "./style.css";

export default function Index({ count, handlePageClick }) {
  return (
    <ReactPaginate
      pageCount={count}
      breakLabel="..."
      previousLabel={"previous"}
      nextLabel={"next"}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
}

Index.prototype = {
  count: propTypes.number,
  handlePageClick: propTypes.func,
};
