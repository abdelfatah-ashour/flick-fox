import React from "react";
import TopSection from "../../components/TopSection/Index";
import "./style.css";
export default function Index() {
  return (
    <section className="Best-Tv-Series">
      <TopSection span={"BEST TV SERIES"} h2={"World Best TV Series"} />
      <div className="container">
        <div className="row">
          <div>card 1</div>
          <div>card 2</div>
          <div>card 3</div>
          <div>card 4</div>
        </div>
      </div>
    </section>
  );
}
