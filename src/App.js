import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner/Index";
const Home = lazy(() => import("./pages/Home/Index"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          </Route>

          <Route>
            <Suspense fallback={<Spinner />}>
              <PageNotFound />
            </Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

function PageNotFound() {
  return <h1>404 | page not found</h1>;
}
