import { CocktailsState } from '../types'

export const favoritesList = ({ favorites }: CocktailsState) => favorites

export const isFavorite =
  (id: string) =>
  ({ favorites }: CocktailsState) =>
    favorites.includes(id)

//TODO: Coktail list and cocktail by id
