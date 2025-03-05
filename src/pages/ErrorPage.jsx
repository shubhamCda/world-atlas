import React from "react";
import { Link, useRouteError } from "react-router-dom";

import "./error.css";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div id="oopss">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <span>Page 404</span>
          <p className="p-a">
           {error.data}
          </p>
          <p className="p-b">... Back to previous page</p>
          <Link href="#" className="back">
            ... Back to previous page
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
