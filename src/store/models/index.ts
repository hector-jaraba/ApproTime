import { getCocktails, getFavorites } from '../../localStorage'
import { CocktailsState } from '../types'

export const initialState: CocktailsState = {
  favorites: getFavorites() ?? [],
  cocktails: getCocktails() ?? [],
  randomCocktail: undefined,
}
