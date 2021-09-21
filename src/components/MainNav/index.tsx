import React, { useState, useEffect } from 'react'
import * as Routes from '../../router'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './style.scss'

const Render: React.FC = () => {
  const [activeClass, setActiveClass] = useState('home')
  //assigning location variable
  const location = useLocation()

  //destructuring pathname from location
  const { pathname } = location

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')[1]

  useEffect(() => {
    switch (splitLocation) {
      case '':
        setActiveClass('home')
        break
      case 'favorites':
        setActiveClass('favorites')
        break
    }
  }, [splitLocation])

  return (
    <nav className="flex text-white mt-9 bg-dark-200 rounded-md relative">
      <NavLink
        to={Routes.HOME_PAGE}
        className={`relative transition-all px-4 py-2 block z-10 outline-none ${
          activeClass === 'home' ? 'home' : undefined
        }`}
      >
        Home
      </NavLink>
      <NavLink
        to={Routes.FAVORITES_PAGE}
        className={`relative transition-all px-4 py-2 block z-10 outline-none ${
          activeClass === 'favorites' ? 'favorites' : undefined
        }`}
      >
        Favorites
      </NavLink>
      <div className="active px-4 py-2 bg-pink-500 rounded-md absolute"></div>
    </nav>
  )
}

export default Render
