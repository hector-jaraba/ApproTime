import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGlobalContext } from '../context'
import { requestHandler } from '../helpers'
import { createCocktailsFromServer } from '../models'
import { cocktailsService } from '../services'
import {
  addFavorite,
  removeFavorite,
  isFavorite as isFavoriteSelector,
} from '../store'

export const useCocktailDetail = (id: string) => {
  const dispatch = useDispatch()
  const isFavorite = useSelector(isFavoriteSelector(id))
  const { cocktails, setCocktails } = useGlobalContext()

  const cocktail = cocktails.find((c) => c.id === id)

  const handleFavorite = () => {
    const action = !isFavorite ? addFavorite : removeFavorite
    dispatch(action(id))
  }

  const getCocktail = async () => {
    const [data] = await requestHandler(() => cocktailsService.getById(id))
    if (data) {
      const cocktails = createCocktailsFromServer(data)
      setCocktails(cocktails)
    }
  }

  useEffect(() => {
    getCocktail()
  }, [])

  return {
    cocktail,
    isFavorite,
    handleFavorite,
  }
}
