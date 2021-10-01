import React from "react";
import { AiFillClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import WatchNowBtn from "../WatchNowBtn/Index";
import "./style.css";

export default function Index() {
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
        <WatchNowBtn url="https://www.youtube.com/watch?v=R2gbPxeNk2E" />
      </div>
    </header>
  );
}
