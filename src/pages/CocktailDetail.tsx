import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import CocktailItem from '../components/CocktailItem'
import { RouteWithId } from '../types'
import BaseLoader from '../components/BaseLoader'
import { useSelector } from 'react-redux'
import { cocktailDetail } from '../store'
import { requestHandler } from '../helpers'
import API from '../services'
import { createCocktailsFromServer } from '../models'

const CocktailDetail: React.FC = () => {
  const { id } = useParams<RouteWithId>()
  const history = useHistory()
  const [cocktail, setCocktail] = useState(useSelector(cocktailDetail(id)))

  const getCocktail = async () => {
    const [data] = await requestHandler(() => API.cocktails.getById(id))
    if (data) {
      const [firstCocktail] = createCocktailsFromServer(data)
      setCocktail(firstCocktail)
    }
  }

  useEffect(() => {
    // TODO: move to action
    if (!cocktail) {
      getCocktail()
    }
  }, [])

  if (!cocktail) {
    return <BaseLoader />
  }

  return (
    <div className="flex flex-col justify-center mb-4 pb-4">
      <CocktailItem key={id} cocktail={cocktail} isDetail={true} />
      <div className="mt-10 text-center">
        <button
          className="text-white bg-indigo-900 py-2 px-4 rounded-md transition-all hover:bg-indigo-600"
          onClick={history.goBack}
        >
          👈 go back
        </button>
      </div>
    </div>
  )
}

export default CocktailDetail
