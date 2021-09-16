import React from "react";
import * as Routes from "../../router";
import { Link } from "react-router-dom";

const Render = () => (
  <nav>
    <ul className="flex text-white my-5">
      <li>
        <Link to={Routes.HOME_PAGE}>Home</Link>
      </li>
      <span className="mx-4">|</span>
      <li>
        <Link to={Routes.FAVORITES_PAGE}>Favorites</Link>
      </li>
    </ul>
  </nav>
);

export default Render;
