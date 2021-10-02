import React from "react";
import { useHistory } from "react-router";
import { SEO } from "../../components/SEO/Index";

export default function Index() {
  const route = useHistory();

  setTimeout(() => {
    route.push("/");
  }, 3000);

  return (
    <>
      <SEO title="404 | Page Not Found" description="hello world" />
      <div className="container">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "100%", height: "100vh" }}>
          <p className="lead">404 | page not found</p>
          <span>page will automatically return to home page after 3 sec...</span>
        </div>
      </div>
    </>
  );
}
