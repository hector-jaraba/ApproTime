import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { favoritesList as favoritesListSelector } from '../store'
import { Cocktail } from '../types'
import CocktailItem from '../components/CocktailItem'

const ApproDetail: React.FC = () => {
  const favorites: Cocktail[] = useSelector(favoritesListSelector)
  const renderFavoriteList = () =>
    favorites.map((cocktail) => {
      return <CocktailItem key={cocktail.id} cocktail={cocktail} />
    })
  const renderEmpty = () => (
    <div className="text-white">
      <h3>Oooh noo your list is empty!</h3>
      <h2>Try to add some cocktails =)</h2>
    </div>
  )

  const renderFavoriteOrEmpty = () =>
    favorites.length ? renderFavoriteList() : renderEmpty()

  const render = () => <div className="pb-10">{renderFavoriteOrEmpty()}</div>

  return render()
}

export default ApproDetail
