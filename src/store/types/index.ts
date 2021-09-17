import { Cocktail } from '../../types'

export type CocktailsState = {
  cocktails: Cocktail[]
  favorites: string[]
}

export type CocktailsAction = {
  type: string
  payload?: unknown
}

export type FavoritePayload = {
  id: string
}

export type Reducer = (
  state: CocktailsState,
  action: CocktailsAction
) => CocktailsState

export type Dispatch = (action: CocktailsAction) => void
