import React, { useState } from "react";
import { SEO } from "../../components/SEO/Index";
import { useFetch } from "../../hooks/useFetch.js";
import { getTvGenres } from "../../utility/getTvGenres";
import { GroupCardsProps } from "../../utility/groupCardsProps";
import Breadcrumb from "../../components/Breadcrumb/Index";
import GroupCards from "../../components/GroupCards/Index";
import "./style.css";

export default function Index() {
  const [genre, setGenre] = useState(10759);
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useFetch(
    "GET",
    `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genre}`
  );

  const genres = getTvGenres();

  const handleCountPage = (num) => {
    setPage(num.selected + 1);
  };

  const handleSelectGenra = (num) => {
    setGenre(num);
  };

  const propsMovies = new GroupCardsProps(
    isLoading,
    data?.results,
    data?.total_pages || 0,
    error,
    handleCountPage
  );

  return (
    <>
      <SEO title="TV" description="hello world" />
      <Breadcrumb h2="discover TV" target="TV" />
      <div className="TV">
        <main className="container">
          <section className="d-flex justify-content-around">
            <ul className="list-genres list-unstyled">
              {genres.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => handleSelectGenra(item.id)}
                    className={genre === item.id ? "active" : ""}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </section>
          <GroupCards {...propsMovies} />
        </main>
      </div>
    </>
  );
}
