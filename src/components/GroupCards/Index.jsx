import React from "react";
import propTypes from "prop-types";
import Pagination from "../../components/Pagination/Index";
import Card from "../../components/Card/Index";

export default function Index({
  isLoading,
  data,
  count,
  error,
  handleCountPage,
}) {
  return (
    <>
      <section className="row">
        {!isLoading &&
          !error &&
          data &&
          data?.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
      </section>
      {count && (
        <section className="w-100 d-flex justify-content-center">
          <Pagination count={count} handlePageClick={handleCountPage} />
        </section>
      )}
    </>
  );
}

Index.prototype = {
  isLoading: propTypes.bool,
  data: propTypes.bool || propTypes.object,
  error: propTypes.bool,
  handleCountPage: propTypes.func,
};
