import { createStore  } from 'redux'

export const ADD_FAVORITE = '@favorite/add'
export const REMOVE_FAVORITE = '@favorite/remove'


export type CocktailsState = {
    favorites: string[]
}

type CocktailsAction = {
    type: string
    payload?: string
}


const initialState:CocktailsState  = {
    favorites:[]
}

const actionAddFavorite = (state: CocktailsState, id: string) => {
    console.log(state)
    return {...state, favorites: [...state.favorites, id]}
}

const actionRemoveFavorite = (state: CocktailsState, id: string) => {
    console.log(state)
    return {...state, favorites: [...state.favorites.filter(item => item !== id)]}
}

const ACTIONS: Record<string, Function> = {
    [ADD_FAVORITE]: actionAddFavorite,
    [REMOVE_FAVORITE]: actionRemoveFavorite
}


const cocktailsReducer = (state = initialState, action: CocktailsAction) => {
    const { type, payload } = action
    switch (type) {
        case ADD_FAVORITE:
            return actionAddFavorite(state, payload as string)
        case REMOVE_FAVORITE:
            return actionRemoveFavorite(state, payload as string)
        default:
            return state
    }
    // return type ? ACTIONS[type as string](type, payload) : state
}

export const store = createStore(cocktailsReducer)

