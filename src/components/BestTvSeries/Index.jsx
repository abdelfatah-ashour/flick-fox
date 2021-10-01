import React, { useState } from "react";
import TopSection from "../../components/TopSection/Index";
import Card from "../Card/Index";
import { useFetch } from "../../hooks/useFetch";
import Pagination from "../Pagination/Index";
import "./style.css";

export default function Index() {
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useFetch(
    "GET",
    `/tv/popular?&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );

  const handlePageClick = (num) => {
    setPage(num?.selected + 1);
  };

  return (
    <section className="Best-Tv-Series">
      <TopSection span={"BEST TV SERIES"} h3={"World Best TV Series"} />
      <div className="container">
        <div className="row">
          {!isLoading &&
            !error &&
            data &&
            data?.results.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          <Pagination
            count={Math.ceil(data?.total_pages / 8)}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </section>
  );
}
