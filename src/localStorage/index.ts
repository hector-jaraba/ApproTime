import { Cocktail } from '../types'

const FAVORITES = 'favorites'
const COCKTAILS = 'cocktails'

const getLocalStorageItem = <T>(name: string) => {
  const item = localStorage.getItem(name)
  if (typeof item === 'string') {
    return JSON.parse(item) as T
  }
  return undefined
}

export const getFavorites = () => {
  return getLocalStorageItem<string[]>(FAVORITES)
}

export const saveFavorites = (favorites: string[]) => {
  localStorage.setItem(FAVORITES, JSON.stringify(favorites))
}

export const getCocktails = () => {
  return getLocalStorageItem<Cocktail[]>(COCKTAILS)
}

export const saveCocktails = (cocktails: Cocktail[]) => {
  localStorage.setItem(COCKTAILS, JSON.stringify(cocktails))
}
