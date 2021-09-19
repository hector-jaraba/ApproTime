import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { favoritesList as favoritesListSelector } from '../store'
import { requestHandler } from '../helpers'
import { cocktailsService } from '../services'
import { createCocktailsFromServer } from '../models'
import { Cocktail } from '../types'
import CocktailItem from '../components/CocktailItem'
import { useCocktailDetail } from '../hooks'

const ApproDetail: React.FC = () => {
  const favorites = useSelector(favoritesListSelector)
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

  const render = () => <div>{renderFavoriteOrEmpty()}</div>

  return render()
}

export default ApproDetail
