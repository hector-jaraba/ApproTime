import React from 'react'
import CocktailSvg from '../../favicon.svg'
import './style.css'

const Logo: React.FC = () => {
  return (
    <div className="Logo relative inline-block mt-4">
      <div className="flex items-center text-indigo-400">
        <figure className="w-20 h-20">
          <img src={CocktailSvg} alt="logo" height="80" width="80" />
        </figure>
        <h2 className="text-3xl mb-3 mx-2 font-sans">ApproTime</h2>
      </div>
      <div className="tag absolute bottom-2 right-0 transform -rotate-12">
        <span className="glow">Open</span>
      </div>
    </div>
  )
}
export default Logo
