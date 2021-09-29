import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner/Index";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
const Home = lazy(() => import("./pages/Home/Index"));
const AiringToday = lazy(() => import("./pages/AiringToday/Index"));
const OnTheAir = lazy(() => import("./pages/OnTheAir/Index"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        </Route>

        <Route path="/tv-show/airing-today" exact>
          <Suspense fallback={<Spinner />}>
            <AiringToday />
          </Suspense>
        </Route>

        <Route path="/tv-show/on-the-air" exact>
          <Suspense fallback={<Spinner />}>
            <OnTheAir />
          </Suspense>
        </Route>

        <Route>
          <Suspense fallback={<Spinner />}>
            <PageNotFound />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

function PageNotFound() {
  return <h1>404 | page not found</h1>;
}
