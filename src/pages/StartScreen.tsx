import React, { useEffect } from 'react'
import CocktailItem from '../components/CocktailItem'
import {
  getRandomCocktail,
  resetRandomCocktail,
  randomCocktail as randomCocktailSelector,
} from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { Cocktail } from '../types'
import BaseLoader from '../components/BaseLoader'

const StartScreen: React.FC = () => {
  const dispatch = useDispatch()
  const cocktail: Cocktail | undefined = useSelector(randomCocktailSelector)
  const renderCocktail = (cocktail: Cocktail) => {
    return <CocktailItem key={cocktail.id} cocktail={cocktail} />
  }

  const renderEmpty = () => {
    return <BaseLoader />
  }

  const renderCocktailOrEmpty = () =>
    cocktail ? renderCocktail(cocktail) : renderEmpty()

  const handleRefresh = () => {
    if (cocktail) {
      resetRandomCocktail()(dispatch)
    }
    getRandomCocktail()(dispatch)
  }

  useEffect(() => {
    if (cocktail) {
      resetRandomCocktail()(dispatch)
    }
    getRandomCocktail()(dispatch)
  }, [])

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="flex mb-4 pb-4">{renderCocktailOrEmpty()}</div>
      <div className="relative pt-14">
        <button
          className="px-4 py-4 text-indigo-200 bg-gray-900 fixed bottom-0 left-0 w-full cursor-pointer transition-all hover:bg-indigo-900"
          onClick={handleRefresh}
        >
          Give me another drink! 🍹🧉🍸
        </button>
      </div>
    </div>
  )
}

export default StartScreen
