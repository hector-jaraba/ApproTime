import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actionTypes'
import { Dispatch, FavoritePayload } from '../types'

export const addFavorite = (id: string) => (dispatch: Dispatch) => {
  const payload: FavoritePayload = {
    id,
  }
  dispatch({ type: ADD_FAVORITE, payload })
}

export const removeFavorite = (id: string) => (dispatch: Dispatch) => {
  const payload: FavoritePayload = {
    id,
  }
  dispatch({ type: REMOVE_FAVORITE, payload })
}
