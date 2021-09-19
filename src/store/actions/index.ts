import { requestHandler } from '../../helpers'
import { createCocktailsFromServer } from '../../models'
import { cocktailsService } from '../../services'
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  GET_RANDOM_COCKTAIL,
  RESET_RANDOM_COCKTAIL,
} from '../actionTypes'
import { Dispatch, FavoritePayload, CocktailPayload } from '../types'

export const getRandomCocktail = () => async (dispatch: Dispatch) => {
  const [data] = await requestHandler(cocktailsService.getRandom)
  if (data) {
    const [cocktail] = createCocktailsFromServer(data)

    const payload: CocktailPayload = {
      cocktail,
    }
    dispatch({ type: GET_RANDOM_COCKTAIL, payload })
  }
}

export const resetRandomCocktail = () => async (dispatch: Dispatch) => {
  dispatch({ type: RESET_RANDOM_COCKTAIL })
}

export const addFavorite = (id: string) => (dispatch: Dispatch) => {
  console.log('add favorite')
  const payload: FavoritePayload = {
    id,
  }
  dispatch({ type: ADD_FAVORITE, payload })
}

export const removeFavorite = (id: string) => (dispatch: Dispatch) => {
  console.log('remove favorite')
  const payload: FavoritePayload = {
    id,
  }
  dispatch({ type: REMOVE_FAVORITE, payload })
}
