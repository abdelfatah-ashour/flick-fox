import React, { useState } from "react";
import { SEO } from "../../components/SEO/Index";
import { useFetch } from "../../hooks/useFetch";
import { GroupCardsProps } from "../../utility/groupCardsProps";
import Breadcrumb from "../../components/Breadcrumb/Index";
import TopSection from "../../components/TopSection/Index";
import GroupCards from "../../components/GroupCards/Index";
import "./style.css";

export default function Index() {
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useFetch(
    "GET",
    `/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );

  const handleCountPage = (num) => {
    setPage(num.selected + 1);
  };

  const groupCardsProps = new GroupCardsProps(
    isLoading,
    data?.results,
    data?.total_pages || 0,
    error,
    handleCountPage
  );

  return (
    <>
      <SEO title="Airing Today" desctiption="Flick Fox is show new movies" />
      <div>
        <Breadcrumb h2="TV SHOW" target={"Airing Today"} />
        <div className="tv-show">
          <main className="container">
            <TopSection span="ONLINE STREAMING" h3="New Tv Show" />
            <GroupCards {...groupCardsProps} />
          </main>
        </div>
      </div>
    </>
  );
}
