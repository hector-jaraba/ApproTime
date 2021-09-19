import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import CocktailItem from '../components/CocktailItem'
import { RouteWithId } from '../types'
import { useCocktailDetail } from '../hooks'
import BaseLoader from '../components/BaseLoader'

const CocktailDetail: React.FC = () => {
  const { id } = useParams<RouteWithId>()
  const history = useHistory()
  const { cocktail } = useCocktailDetail(id)
  if (!cocktail) {
    // TODO: empty case
    return <BaseLoader />
  }

  return (
    <div className="flex flex-col justify-center mb-4 pb-4">
      <CocktailItem key={id} cocktail={cocktail} isDetail={true} />
      <div className="mt-10 text-center">
        <button
          className="text-white bg-purple-900 py-2 px-4 rounded-md transition-all hover:bg-purple-600"
          onClick={history.goBack}
        >
          👈 go back
        </button>
      </div>
    </div>
  )
}

export default CocktailDetail
