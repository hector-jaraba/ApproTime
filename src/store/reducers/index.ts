import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actionTypes'
import { initialState } from '../models'
import { CocktailsAction, FavoritePayload, Reducer } from '../types'

const addFavorite: Reducer = (state, action) => {
  console.log(state)
  return {
    ...state,
    favorites: [...state.favorites, (action.payload as FavoritePayload).id],
  }
}

const removeFavorite: Reducer = (state, action) => {
  console.log(state)
  return {
    ...state,
    favorites: [
      ...state.favorites.filter(
        (item) => item !== (action.payload as FavoritePayload).id
      ),
    ],
  }
}

const HANDLERS: Record<string, Reducer> = {
  [ADD_FAVORITE]: addFavorite,
  [REMOVE_FAVORITE]: removeFavorite,
  // TODO: add cocktail
}

const cocktailsReducer = (state = initialState, action?: CocktailsAction) => {
  if (action) {
    return HANDLERS[action.type as string]?.(state, action) ?? state
  }
  return state
}

export default cocktailsReducer
