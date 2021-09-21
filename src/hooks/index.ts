import { useDispatch, useSelector } from 'react-redux'
import {
  addFavorite,
  removeFavorite,
  isFavorite as isFavoriteSelector,
} from '../store'

export const useCocktailDetail = (id: string) => {
  const dispatch = useDispatch()
  const isFavorite = useSelector(isFavoriteSelector(id))
  const handleFavorite = () => {
    const action = !isFavorite ? addFavorite : removeFavorite
    action(id)(dispatch)
  }

  return {
    isFavorite,
    handleFavorite,
  }
}
