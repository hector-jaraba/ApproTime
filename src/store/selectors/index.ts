import { CocktailsState } from '../types'

export const randomCocktail = ({ randomCocktail }: CocktailsState) =>
  randomCocktail

export const favoritesList = ({ cocktails, favorites }: CocktailsState) =>
  cocktails.filter((cocktail) => favorites.includes(cocktail.id))

export const isFavorite =
  (id: string) =>
  ({ favorites }: CocktailsState) =>
    favorites.includes(id)

export const cocktailDetail =
  (id: string) =>
  ({ cocktails }: CocktailsState) =>
    cocktails.find((cocktail) => cocktail.id === id)
