import React from 'react'
import * as Routes from '../../router'
import { NavLink } from 'react-router-dom'
import './style.scss'

const Render: React.FC = () => (
  <nav className="flex text-white mt-9 bg-dark-200 rounded-md relative">
    <NavLink
      to={Routes.HOME_PAGE}
      className="relative transition-all px-4 py-2 block z-10"
      activeClassName="home"
      exact
    >
      Home
    </NavLink>
    <NavLink
      to={Routes.FAVORITES_PAGE}
      className="relative transition-all px-4 py-2 block z-10"
      activeClassName="favorites"
      exact
    >
      Favorites
    </NavLink>
    <div className="active px-4 py-2 bg-pink-500 rounded-md absolute"></div>
  </nav>
)

export default Render
