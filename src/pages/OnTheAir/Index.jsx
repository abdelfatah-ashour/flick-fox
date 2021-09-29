import React, { useState } from "react";
import { SEO } from "../../utility/SEO.js";
import { useFetch } from "../../hooks/useFetch";
import Breadcrumb from "../../components/Breadcrumb/Index";
import TopSection from "../../components/TopSection/Index";
import Pagination from "../../components/Pagination/Index";
import Card from "../../components/Card/Index";
import "./style.css";

export default function Index() {
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useFetch(
    "GET",
    `/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );

  const handleCountPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SEO title="One The Air" description="Flick Fox is show new movies" />
      <Breadcrumb
        h2="TV SHOW"
        links={{ id: "asd121d5874asd", target: "Airing Today" }}
      />
      <div className="on-the-air">
        <main className="container">
          <TopSection span="ONLINE STREAMING" h3="New Tv Show" />
          <section className="row">
            {!isLoading &&
              !error &&
              data &&
              data?.results.slice(0, 24).map((item) => {
                return <Card item={item} key={item.id} />;
              })}
          </section>
          <section className="w-100 d-flex justify-content-center">
            <Pagination
              count={data?.total_pages}
              handlePageClick={handleCountPage}
            />
          </section>
        </main>
      </div>
    </>
  );
}
