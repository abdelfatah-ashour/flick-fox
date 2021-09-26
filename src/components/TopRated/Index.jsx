import React from "react";
import "./style.css";

export default function Index() {
  return (
    <section className="Top-Rated">
      <div className="container">
        <div className="head d-flex flex-column flex-wrap justify-content-center align-items-center">
          <h6 className="text-uppercase">online streaming</h6>
          <h3 className="text-uppercase">Top Rated Movies</h3>
          <ul className="d-flex list-unstyled tabs">
            <li className="tab mx-2">tv show</li>
            <li className="tab mx-2">movies</li>
            <li className="tab mx-2">documentary</li>
            <li className="tab mx-2">sports</li>
          </ul>
        </div>
        <div className="row"></div>
      </div>
    </section>
  );
}
