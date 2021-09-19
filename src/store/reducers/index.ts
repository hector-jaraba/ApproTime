import { getCocktails, saveCocktails, saveFavorites } from '../../localStorage'
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  GET_RANDOM_COCKTAIL,
} from '../actionTypes'
import { initialState } from '../models'
import {
  CocktailPayload,
  CocktailsAction,
  FavoritePayload,
  Reducer,
} from '../types'

const getRandomCocktail: Reducer = (state, action) => {
  return {
    ...state,
    cocktails: [
      ...state.cocktails,
      (action.payload as CocktailPayload).cocktail,
    ],
    randomCocktail: (action.payload as CocktailPayload).cocktail,
  }
}

const addFavorite: Reducer = (state, action) => {
  console.log(state)
  const payload = action.payload as FavoritePayload
  const favorites = [...state.favorites, payload.id]
  saveFavorites(favorites)
  const favoriteCocktail = state.cocktails.find(
    (cocktail) => cocktail.id === payload.id
  )
  const savedCocktails = getCocktails() ?? []
  const cocktails = favoriteCocktail
    ? savedCocktails.concat(favoriteCocktail)
    : undefined
  if (cocktails) {
    saveCocktails(cocktails)
  }

  return {
    ...state,
    favorites,
  }
}

const removeFavorite: Reducer = (state, action) => {
  console.log(state)
  const payload = action.payload as FavoritePayload
  const favorites = [...state.favorites.filter((item) => item !== payload.id)]
  saveFavorites(favorites)
  const cocktails = state.cocktails.filter(
    (cocktail) => cocktail.id !== payload.id
  )
  saveCocktails(cocktails)
  return {
    ...state,
    favorites,
  }
}

const HANDLERS: Record<string, Reducer> = {
  [ADD_FAVORITE]: addFavorite,
  [REMOVE_FAVORITE]: removeFavorite,
  [GET_RANDOM_COCKTAIL]: getRandomCocktail,
}

const cocktailsReducer = (state = initialState, action?: CocktailsAction) => {
  if (action) {
    return HANDLERS[action.type as string]?.(state, action) ?? state
  }
  return state
}

export default cocktailsReducer
