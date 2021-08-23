import React from 'react';
import Cocktail from '../../assets/img/Cocktail';
import './MainLogo.css'

const Logo = () => {
  return (
    <div className='Logo relative inline-block mt-4 pr-8'>
        <div className="flex items-center text-purple-700">
        <Cocktail className="w-24 h-24 fill-current" />
      <h2 className="text-4xl">Appro Time</h2>
        </div>
        <div className="tag absolute bottom-2 right-0 transform -rotate-12">
            <span className="glow">Open</span>
        </div>
      
    </div>
  );
}
export default Logo;