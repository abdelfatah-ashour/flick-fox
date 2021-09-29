import React from "react";
import Carousal from "../../components/CarousalHome/Index";
import TopSection from "../TopSection/Index";
import { useFetch } from "../../hooks/useFetch";
import "./style.css";

export default function Index() {
  const { isLoading, data, error } = useFetch(
    "GET",
    `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <section className="upcoming-movies">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-12 mx-auto text-center">
            <TopSection span="ONLINE STREAMING" h3="Upcoming Movies" />
          </div>
        </div>
        {isLoading && <div className="alert alert-info">loading...</div>}
        {!isLoading && !error && data && <Carousal items={data.results} />}
        {error && <div className="alert alert-danger">error...</div>}
      </div>
    </section>
  );
}
