import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Card from "../Card/Index";
import TopSection from "../TopSection/Index";
import "./style.css";

export default function Index() {
  const { isLoading, data, error } = useFetch(
    "GET",
    `${process.env.REACT_APP_API}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  return (
    <section className="Top-Rated">
      <div className="container">
        <div className="head d-flex flex-column flex-wrap justify-content-center align-items-center">
          <TopSection h3="Top Rated Movies" span="online streaming" />
        </div>
        <div className="row">
          {!isLoading &&
            data &&
            !error &&
            data.results?.slice(0, 8).map((item) => {
              return <Card item={item} key={item.id} />;
            })}
        </div>
      </div>
    </section>
  );
}
