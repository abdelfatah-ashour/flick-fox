import React, { useState } from "react";
import { SEO } from "../../components/SEO/Index.jsx";
import { useFetch } from "../../hooks/useFetch";
import Breadcrumb from "../../components/Breadcrumb/Index";
import TopSection from "../../components/TopSection/Index";
import GroupCards from "../../components/GroupCards/Index";
import { GroupCardsProps } from "../../utility/groupCardsProps";
import "./style.css";

export default function Index() {
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useFetch(
    "GET",
    `/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );

  const handleCountPage = (num) => {
    setPage(num.selected + 1);
  };

  const groupCardProps = new GroupCardsProps(
    isLoading,
    data?.results,
    data?.total_pages || 0,
    error,
    handleCountPage
  );

  return (
    <>
      <SEO title="One The Air" description="Flick Fox is show new movies" />
      <Breadcrumb h2="TV SHOW" target={"on the air"} />
      <div className="on-the-air">
        <main className="container">
          <TopSection span="ONLINE STREAMING" h3="New Tv Show" />
          <GroupCards {...groupCardProps} />
        </main>
      </div>
    </>
  );
}
