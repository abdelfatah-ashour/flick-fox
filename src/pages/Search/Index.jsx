import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { SEO } from "../../components/SEO/Index";
import { GroupCardsProps } from "../../utility/groupCardsProps.js";
import Pagination from "../../components/Pagination/Index";
import GroupCard from "../../components/GroupCards/Index";
import Breadcrumb from "../../components/Breadcrumb/Index";

export default function Index() {
  const [page, setPage] = useState(1);
  const { valueOfSearch } = useSelector((state) => state);
  const url = `/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${valueOfSearch}&page=${page}`;

  const { isLoading, data, error } = useFetch("GET", url);

  const handleCountPage = (num) => {
    setPage(num.selected + 1);
  };

  const propsOfSearch = new GroupCardsProps(isLoading, data?.results, error);

  console.log(data);

  return (
    <>
      <SEO title="Search" description="hello world" />
      <Breadcrumb h2="Result Of Searching" target="search" />
      <div className="Search">
        <main className="container">
          {propsOfSearch.data?.length ? (
            <>
              <div className="row">
                <span>reseult of search is {data?.total_results}</span>
              </div>
              <GroupCard {...propsOfSearch} />
              <Pagination
                count={data?.total_pages}
                handlePageClick={handleCountPage}
              />
            </>
          ) : (
            <div className="alert alert-info text-center my-5">
              result of search is 0
            </div>
          )}
        </main>
      </div>
    </>
  );
}
