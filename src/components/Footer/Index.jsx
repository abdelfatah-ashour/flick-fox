import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import "./style.css";

export default function Index() {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-around align-items-center">
          <nav className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="ms-3">FAQ</div>
            <div className="ms-3">HELP CENTER</div>
            <div className="ms-3">TERMS OF USE</div>
            <div className="ms-3">PRIVACY</div>
          </nav>
          <ul className="col-md-6 col-12 list-unstyled d-flex justify-content-md-end justify-content-center align-items-center">
            <li className="me-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="me-2">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="me-2">
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaPinterestP />
              </a>
            </li>
            <li className="me-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
        <div className="row text-center">
          <p className="lead">
            Copyright © 2021. All Rights Reserved By{" "}
            <span className="brand">Flick Fox</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
