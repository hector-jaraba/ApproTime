import React, { useEffect } from 'react'
import CocktailItem from '../components/CocktailItem'
import {
  getRandomCocktail,
  randomCocktail as randomCocktailSelector,
} from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { Cocktail } from '../types'

const StartScreen: React.FC = () => {
  const dispatch = useDispatch()
  const cocktail = useSelector(randomCocktailSelector)
  const renderCocktail = (cocktail: Cocktail) => {
    return <CocktailItem key={cocktail.id} cocktail={cocktail} />
  }

  const renderEmpty = () => {
    return <div>empty...</div>
  }

  const renderCocktailOrEmpty = () =>
    cocktail ? renderCocktail(cocktail) : renderEmpty()

  const handleRefresh = () => {
    getRandomCocktail()(dispatch)
  }

  useEffect(() => {
    getRandomCocktail()(dispatch)
  }, [])

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl my-4 text-purple-50 text-center">
        This is a RANDOM cocktail
      </h1>
      <div className="flex justify-center my-4">{renderCocktailOrEmpty()}</div>
      <div className="relative pt-14">
        <button
          className="px-4 py-4 text-indigo-200 bg-gray-900 fixed bottom-0 left-0 w-full cursor-pointer"
          onClick={handleRefresh}
        >
          Give me another drink! 🍹🧉🍸
        </button>
      </div>
    </div>
  )
}

export default StartScreen
