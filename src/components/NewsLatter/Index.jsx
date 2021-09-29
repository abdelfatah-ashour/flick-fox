import React from "react";
export default function Index() {
  return (
    <section className="News-Latter">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-around align-items-center">
          <div className="col-md-6 col-12 d-flex flex-wrap justify-content-center align-content-center left">
            <h2>TRIAL START FIRST 30 DAYS.</h2>
            <span>Enter your email to create or restart your membership.</span>
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
  );
}
