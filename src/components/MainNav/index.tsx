import React from 'react'
import * as Routes from '../../router'
import { NavLink } from 'react-router-dom'

const Render: React.FC = () => (
  <nav>
    <ul className="flex text-white my-5">
      <li>
        <NavLink
          to={Routes.HOME_PAGE}
          className="relative transition-all py-2 px-2"
          activeClassName="text-pink-600"
          exact
        >
          Home
        </NavLink>
      </li>
      <span className="mx-4">|</span>
      <li>
        <NavLink
          to={Routes.FAVORITES_PAGE}
          className="relative transition-all py-2 px-2"
          activeClassName="text-pink-600"
          exact
        >
          Favorites
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Render
