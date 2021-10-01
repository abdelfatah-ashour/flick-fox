import React from "react";
import { SEO } from "../../components/SEO/Index";
import TopSection from "../../components/TopSection/Index";
import Breadcrumb from "../../components/Breadcrumb/Index";
import { getPlanOfPrice } from "../../utility/getPlanOfPrice";
import "./style.css";

export default function Index() {
  const plans = getPlanOfPrice();
  return (
    <>
      <SEO title="Pricing" description="hello description" />
      <Breadcrumb h2="Our Plan" target="pricing" />
      <div className="Pricing">
        <TopSection span="our pricing plans" h3="Our Pricing Strategy" />
        <main className="container">
          <div className="group-plan row d-flex justify-content-evenly">
            {plans.map((plan) => {
              return (
                <div
                  className="card-plan col-lg-3 col-md-5 col-10 mb-2 d-flex flex-column justify-content-evenly p-3"
                  key={plan.id}>
                  <div className="d-flex flex-column justify-content-evenly align-items-center text-center">
                    <div>
                      <span className="text-uppercase font-bold">
                        {plan.head}
                      </span>
                    </div>
                    <div className="p-2 m-1 head">
                      <h6>{plan.currency + plan.price}</h6>
                      <h5>monthly</h5>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li className="option d-flex justify-content-between align-items-center mb-3">
                      <span className="text-capitalize">
                        ✔ {"  "} Video quality
                      </span>
                      <span className="text-uppercase">
                        {plan.videoQuality}
                      </span>
                    </li>
                    <li className="option d-flex justify-content-between align-items-center mb-3">
                      <span className="text-capitalize">
                        ✔ {"  "} Resolution
                      </span>
                      <span className="text-uppercase">{plan.Resolution}</span>
                    </li>
                    <li className="option d-flex justify-content-between align-items-center mb-3">
                      <span className="text-capitalize">
                        ✔ {"  "} Screens you can watch
                      </span>
                      <span className="text-uppercase">{plan.Screens}</span>
                    </li>
                    <li className="option d-flex justify-content-between align-items-center mb-3">
                      <span className="text-capitalize">
                        ✔ {"  "} Cancel anytime
                      </span>
                      <span className="text-uppercase">
                        {String(plan.Cancel)}
                      </span>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-buy btn-warning" type="button">
                      buy now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
