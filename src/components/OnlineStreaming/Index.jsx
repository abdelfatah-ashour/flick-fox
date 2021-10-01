import React from "react";
import onlineStreamingImg from "../../assets/images/live_img.png";
import TitleSection from "../TitleSection/Index";
import WatchNowBtn from "../WatchNowBtn/Index";
import "./style.css";

export default function Index() {
  return (
    <section className="Online-Streaming">
      <div className="container h-100">
        <div className="row">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start left">
            <TitleSection title="ONLINE STREAMING" />
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
            <div className="d-flex flex-nowrap align-items-center">
              <h4 className="me-4 text-uppercase">hd 4k</h4>
              <h4 className="bold">
                20k+
                <br />
                active customer
              </h4>
            </div>
            <WatchNowBtn url="https://www.youtube.com/watch?v=R2gbPxeNk2E" />
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
