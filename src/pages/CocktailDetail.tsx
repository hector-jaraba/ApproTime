import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CocktailItem from '../components/CocktailItem'
import { RouteWithId } from '../types'
import { useCocktailDetail } from '../hooks'

const CocktailDetail = () => {
  const { id } = useParams<RouteWithId>()
  const { handleFavorite, isFavorite, cocktail } = useCocktailDetail(id)
  if (!cocktail) {
    // TODO: empty case
    return null
  }
  return (
    <div className="flex justify-center my-4 py-10">
      <CocktailItem
        key={id}
        cocktail={cocktail}
        isDetail={true}
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
      />
    </div>
  )
}

export default CocktailDetail
