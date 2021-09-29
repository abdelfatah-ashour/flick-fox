import React from "react";
import { getKeywords } from "../../utility/getKeywords";
import { useFetch } from "../../hooks/useFetch";
import Card from "../Card/Index";
import TopSection from "../TopSection/Index";
import "./style.css";

export default function Index() {
  const { isLoading, data, error } = useFetch(
    "GET",
    `${process.env.REACT_APP_API}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const keywords = getKeywords();

  return (
    <section className="Top-Rated">
      <div className="container">
        <div className="head d-flex flex-column flex-wrap justify-content-center align-items-center">
          <TopSection h3="Top Rated Movies" span="online streaming" />
          <ul className="d-flex list-unstyled tabs">
            {keywords.slice(0, 4).map((elem) => {
              return (
                <li className="tab mx-2" key={elem.id}>
                  {elem.name}
                </li>
              );
            })}
          </ul>
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
