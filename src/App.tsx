import { Link, useRoutes } from "react-router-dom";
import routes from "./core/routes/routes";
import React from "react";
import { useIsFetching } from "react-query";
import "./App.css";
import Loader from "./ui/components/loader/Loader";

export default function App() {
  let element = useRoutes(routes);
  const isFetching = useIsFetching();

  return (
    <main className="main">
      <div className="header">
        <Link className="title-link" to="/">
          {" "}
          <div className="main-title">Social Media</div>{" "}
        </Link>
        {!!isFetching && <Loader />}
      </div>

      {element}
    </main>
  );
}
