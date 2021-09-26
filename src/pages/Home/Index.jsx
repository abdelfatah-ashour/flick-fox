import React, { useEffect, useRef, useState } from "react";
import { SEO } from "../../utility/SEO";
import { Link, useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineClose,
  AiOutlineCalendar,
  AiFillClockCircle,
} from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
import Carousal from "../../components/CarousalHome/Index";
import Services from "../../components/ServicesHome/Index";
import TopRated from "../../components/TopRated/Index";
import OnlineStreaming from "../../components/OnlineStreaming/Index";
import BestTvSeries from "../../components/BestTvSeries/Index";
import Footer from "../../components/Footer/Index";
import logo from "../../assets/images/logo.png";
import "../../assets/css/home.css";

export default function Index() {
  const [category, setCategory] = useState("tv show");
  const routeLink = useHistory();
  const navbarRef = useRef(null);
  const [fixed, setFixed] = useState(false);
  const [search, setSearch] = useState(false);

  const links = [
    {
      id: "45wd8d",
      pathname: "/",
      label: "home",
    },
    {
      id: "45as46",
      pathname: "/movie",
      label: "movie",
    },
    {
      id: "we12sd",
      pathname: "/tv-show",
      label: "tv show",
    },
    {
      id: "we98cx",
      pathname: "/price",
      label: "price",
    },
    {
      id: "gh21ax",
      pathname: "/blog",
      label: "blog",
    },
    {
      id: "af12ey",
      pathname: "/contacts",
      label: "contacts",
    },
  ];

  const listCategory = [
    {
      id: "21sd54",
      category: "tv show",
    },
    {
      id: "sd78we",
      category: "movies",
    },
    {
      id: "26gh49",
      category: "anime",
    },
  ];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 600) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  const handleDisplaySearch = () => {
    setSearch(!search);
  };

  const handleSelectCategory = (tab) => {
    setCategory(tab);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixed]);

  return (
    <>
      <SEO
        title="Flick Fox | Exclusive Movies"
        description="Flick Fox is show new movies"
      />
      <main>
        <header>
          <nav
            className={
              fixed
                ? "fixed navbar navbar-expand-lg w-100"
                : "sticky navbar navbar-expand-lg w-100"
            }
            ref={navbarRef}
            id="FlickFox"
          >
            <div className="container">
              <div className="navbar-brand d-flex flex-nowrap justify-content-between align-items-center">
                <img src={logo} alt="flick fox | logo" />
                <Link to="/" aria-label="flick fox | logo">
                  Flick Fox
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <RiMenu5Fill />
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  {links.map((item) => {
                    return (
                      <li className="nav-item" key={item.id}>
                        <Link
                          className={
                            routeLink.location.pathname === item.pathname
                              ? "nav-link active"
                              : "nav-link"
                          }
                          to={item.pathname}
                          aria-label="flick fox | logo"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="box-search" onClick={handleDisplaySearch}>
                  <FiSearch />
                </div>
              </div>
            </div>
          </nav>
          <div className="content-header d-flex flex-wrap flex-column justify-content-center align-items-start">
            <h3>flick fox</h3>
            <h2>
              Unlimited Movie,
              <br />
              TVs Shows,& More.
            </h2>
            <div className="details-content d-flex flex-nowrap justify-content-start align-items-center">
              <span>pg 18</span>
              <span>hd</span>
              <span>HD Romance</span>,
              <span>
                <AiOutlineCalendar className="icon" /> Drama 2021
              </span>
              <span>
                <AiFillClockCircle className="icon" />
                128 min
              </span>
            </div>
            <a
              href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
              aria-label="watch promo movie in youtube"
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPlayFill /> watch now
            </a>
          </div>
          {/* <div className="overlay"></div> */}
          {search && (
            <div
              className="group-search d-flex flex-nowrap justify-content-center align-items-center"
              onClick={handleDisplaySearch}
            >
              <button className="btn close" onClick={handleDisplaySearch}>
                <AiOutlineClose />
              </button>
              <div className="control-search">
                <input
                  type="search"
                  name="search"
                  id="searchId"
                  placeholder="search here..."
                />
              </div>
            </div>
          )}
        </header>
        <section className="upcoming-movies">
          <div className="container">
            <div className="row d-flex align-items-center my-3">
              <div className="col-md-6 col-12">
                <div className="d-flex flex-column my-3 heading">
                  <h6 className="text-uppercase">ONLINE STREAMING</h6>
                  <h3>Upcoming Movies</h3>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="d-flex justify-content-end">
                  <ul className="list-categories d-flex list-unstyled">
                    {listCategory.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className={
                            category === item.category ? "active-tab" : ""
                          }
                          onClick={() => handleSelectCategory(item.category)}
                        >
                          {item.category}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <Carousal items={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
          </div>
        </section>
        <Services />
        <TopRated />
        <OnlineStreaming />
        <BestTvSeries />
        <section className="News-Latter">
          <div className="container">
            <div className="row d-flex flex-wrap justify-content-around align-items-center">
              <div className="col-md-6 col-12 d-flex flex-wrap justify-content-center align-content-center left">
                <h2>TRIAL START FIRST 30 DAYS.</h2>
                <span>
                  Enter your email to create or restart your membership.
                </span>
              </div>
              <div className="col-md-6 col-12 d-flex justify-content-center align-items-center get-started">
                <div className="d-flex">
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    autoComplete="true"
                  />
                  <button type="submit">get started</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
