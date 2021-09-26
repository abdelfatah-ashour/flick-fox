import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import onlineStreamingImg from "../../assets/images/live_img.png";
import "./style.css";

export default function Index() {
  return (
    <section className="Online-Streaming">
      <div className="container h-100">
        <div className="row">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start left">
            <div>
              <span>line</span>
              <span>online streaming</span>
            </div>
            <div>
              <h3>
                Live Movie & TV Shows For
                <br /> Friends & Family
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                eiusmod There are many variations of passages of lorem Ipsum
                available, but the majority have suffered alteration.
              </p>
            </div>
            <div className="d-flex flex-nowrap">
              <h4 className="me-4">hd 4k</h4>
              <h4 className="bold">
                20k+
                <br />
                active customer
              </h4>
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
          <div className="col-md-6 col-12 overflow-hidden right">
            <img
              src={onlineStreamingImg}
              alt="online streaming"
              loading="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
