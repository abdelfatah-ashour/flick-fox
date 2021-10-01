import React from "react";
import { SEO } from "../../components/SEO/Index";
import Services from "../../components/ServicesHome/Index";
import TopRated from "../../components/TopRated/Index";
import OnlineStreaming from "../../components/OnlineStreaming/Index";
import BestTvSeries from "../../components/BestTvSeries/Index";
import Upcoming from "../../components/Upcoming/Index";
import Header from "../../components/HeaderHome/Index";
import NewsLetter from "../../components/NewsLatter/Index";
import "./style.css";

export default function Index() {
  return (
    <>
      <SEO
        title="Flick Fox | Exclusive Movies"
        description="Flick Fox is show new movies"
      />
      <Header />
      <main>
        <Upcoming />
        <Services />
        <TopRated />
        <OnlineStreaming />
        <BestTvSeries />
        <NewsLetter />
      </main>
    </>
  );
}
