import React from "react";
import {
  AiFillClockCircle,
  AiOutlineCalendar,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { navbarSearchAction } from "../../redux/actions/navbarAction";
import { CLOSE_SEARCH } from "../../redux/types";

export default function Index() {
  const dispatch = useDispatch();
  const { navbar_search } = useSelector((state) => state);

  return (
    <header>
      <div className="content-header d-flex flex-wrap flex-column justify-content-center align-items-start">
        <h3>flick fox</h3>
        <h2>
          Unlimited Movie,
          <br />
          TVs Shows.
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
          rel="noreferrer">
          <BsFillPlayFill /> watch now
        </a>
      </div>
      {navbar_search && (
        <div className="group-search d-flex flex-nowrap justify-content-center align-items-center">
          <button
            className="btn close"
            onClick={() => dispatch(navbarSearchAction(CLOSE_SEARCH, false))}>
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
  );
}
