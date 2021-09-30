import React, { useCallback, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";
import { getLinksList } from "../../utility/getLinksList";
import { useDispatch, useSelector } from "react-redux";
import {
  navbarFixedAction,
  navbarSearchAction,
} from "../../redux/actions/navbarAction.js";
import { FIXED, BLOCK, OPEN_SEARCH } from "../../redux/types";
import logo from "../../assets/images/logo.png";
import "./style.css";

export default function Index() {
  const dispatch = useDispatch();
  const { navbar_fixed } = useSelector((state) => state);
  const routeLink = useHistory();
  const links = getLinksList();

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 600) {
      dispatch(navbarFixedAction(FIXED, true));
    } else {
      dispatch(navbarFixedAction(BLOCK, false));
    }
  }, [dispatch]);

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={
        navbar_fixed
          ? "fixed navbar navbar-expand-lg w-100"
          : "sticky navbar navbar-expand-lg w-100"
      }
      id="FlickFox">
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
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <RiMenu5Fill />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {links.map((item) => {
              return !item.sunMenu ? (
                <li className="nav-item" key={item.id}>
                  <Link
                    className={
                      routeLink.location.pathname === item.pathname
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to={item.pathname}
                    aria-label="flick fox | logo">
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li className="nav-item dropdown" key={item.id}>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {item.label}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown">
                    {item.sunMenu.map((subMenu, i) => {
                      return (
                        <React.Fragment key={subMenu.id}>
                          <li>
                            <Link
                              className="dropdown-item text-uppercase"
                              to={item.pathname + subMenu.link}>
                              {subMenu.label}
                            </Link>
                          </li>
                          {i < item.sunMenu.length - 1 && (
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div
            className="box-search"
            onClick={() => dispatch(navbarSearchAction(OPEN_SEARCH, true))}>
            <FiSearch />
          </div>
        </div>
      </div>
    </nav>
  );
}
