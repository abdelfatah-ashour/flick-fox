import React from "react";
import { BsDownload } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { GrDevice } from "react-icons/gr";
import TitleSection from "../TitleSection/Index";
import "./style.css";

export default function Index() {
  return (
    <section className="Services-Home">
      <div className="container h-100">
        <div className="row h-100">
          {/* start left section */}
          <div className="col-md-6 col-12 h-100">
            <div className="row align-items-end h-100">
              <div className="col-10 overflow-hidden">
                <img
                  src="/download-banner.jpg"
                  alt="download banner"
                  loading="lazy"
                  className="w-100"
                />
              </div>
              <div className="col-2 banner d-flex justify-content-around align-items-center">
                <a href="/download-banner.jpg" download>
                  download <BsDownload className="my-2" />
                </a>
              </div>
            </div>
          </div>
          {/* start right section */}
          <div className="right-side col-md-6 col-12 h-100">
            <div className="d-flex flex-column justify-content-around h-100 p-3">
              <TitleSection title="OUR SERVICES" />
              <div className="content">
                <h3>Download Your Shows Watch Offline.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                  eiusmod tempor.There are many variations of passages of lorem
                  Ipsum available, but the majority have suffered alteration in
                  some injected humour.
                </p>
              </div>
              <div className="row px-4">
                <div className="icon-media col-3">
                  <GrDevice />
                </div>
                <div className="col-9 d-flex flex-column">
                  <h4>Enjoy on Your TV.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="row px-4">
                <div className="icon-media col-3">
                  <BiCameraMovie />
                </div>
                <div className="col-9 d-flex flex-column">
                  <h4>Watch Everywhere.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
