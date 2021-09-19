import React from 'react'
import { useParams } from 'react-router-dom'
import CocktailItem from '../components/CocktailItem'
import { RouteWithId } from '../types'
import { useCocktailDetail } from '../hooks'

const CocktailDetail: React.FC = () => {
  const { id } = useParams<RouteWithId>()
  const { cocktail } = useCocktailDetail(id)
  if (!cocktail) {
    // TODO: empty case
    return <div>no cocktail</div>
  }

  return (
    <div className="flex justify-center my-4 py-10">
      <CocktailItem key={id} cocktail={cocktail} isDetail={true} />
    </div>
  )
}

export default CocktailDetail
