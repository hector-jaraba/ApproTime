import { getCocktails, getFavorites } from '../../localStorage'
import { CocktailsState } from '../types'

export const getInitialState = (): CocktailsState => ({
  favorites: getFavorites() ?? [],
  cocktails: getCocktails() ?? [],
  randomCocktail: undefined,
})
