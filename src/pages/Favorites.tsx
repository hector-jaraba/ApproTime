import React from 'react'
import { useSelector } from 'react-redux'
import { favoritesList as favoritesListSelector } from '../store'
import { Cocktail } from '../types'
import CocktailItem from '../components/CocktailItem'
import EmptySvg from '../assets/img/empty.svg'

const ApproDetail: React.FC = () => {
  const favorites: Cocktail[] = useSelector(favoritesListSelector)
  const renderFavoriteList = () =>
    favorites.map((cocktail) => {
      return <CocktailItem key={cocktail.id} cocktail={cocktail} />
    })
  const renderEmpty = () => (
    <div className="h-full text-gray-400 flex flex-col items-center justify-center text-2xl relative">
      <div className="flex flex-col justify-center items-center -top-20 relative">
        <figure className="w-28">
          <img src={EmptySvg} />
        </figure>
        <h3>Oooh noo your list is empty!</h3>
        <h2>Try to add some cocktails =)</h2>
      </div>
    </div>
  )

  const renderFavoriteOrEmpty = () =>
    favorites.length ? renderFavoriteList() : renderEmpty()

  const render = () => (
    <div className="pb-10 h-full">{renderFavoriteOrEmpty()}</div>
  )

  return render()
}

export default ApproDetail
