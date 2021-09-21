import { Cocktail } from '../types'

enum StorageKeys {
  FAVORITES = 'favorites',
  COCKTAILS = 'cocktails',
}

const getLocalStorageItem = <T>(name: StorageKeys) => {
  const item = localStorage.getItem(name)
  if (typeof item === 'string') {
    return JSON.parse(item) as T
  }
  return undefined
}

export const getFavorites = () => {
  return getLocalStorageItem<string[]>(StorageKeys.FAVORITES)
}

export const saveFavorites = (favorites: string[]) => {
  localStorage.setItem(StorageKeys.FAVORITES, JSON.stringify(favorites))
}

export const getCocktails = () => {
  return getLocalStorageItem<Cocktail[]>(StorageKeys.COCKTAILS)
}

export const saveCocktails = (cocktails: Cocktail[]) => {
  localStorage.setItem(StorageKeys.COCKTAILS, JSON.stringify(cocktails))
}
