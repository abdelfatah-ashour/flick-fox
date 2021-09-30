import React, { useState } from "react";
import { SEO } from "../../components/SEO/Index";
import { useFetch } from "../../hooks/useFetch";
import { GroupCardsProps } from "../../utility/groupCardsProps";
import Breadcrumb from "../../components/Breadcrumb/Index";
import GroupCard from "../../components/GroupCards/Index";
import TopSection from "../../components/TopSection/Index";
import "./style.css";

export default function Index() {
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useFetch(
    "GET",
    `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );

  const handleCountPage = (num) => {
    setPage(num.selected + 1);
  };

  const groupProps = new GroupCardsProps(
    isLoading,
    data?.results,
    data?.total_pages || 0,
    error,
    handleCountPage
  );

  return (
    <>
      <SEO title="Upcoming Movies" description="hello world" />
      <div className="Upcoming">
        <main>
          <Breadcrumb h2="UPCOMING MOVIES" target="Upcoming" />
          <TopSection span="Unlimited streaming" h3="Upcoming Movies" />
          <section>
            <div className="container">
              <div className="row">
                <GroupCard {...groupProps} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
