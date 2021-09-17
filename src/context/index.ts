import { createContext, useContext } from 'react'
import { Cocktail } from '../types'

interface GlobalState {
  cocktails: Cocktail[]
  setCocktails: (cocktails: Cocktail[]) => void
}

const state: GlobalState = {
  cocktails: [],
  setCocktails: () => {},
}

const globalContext = createContext<GlobalState>(state)

export const GlobalProvider = globalContext.Provider

export const useGlobalContext = () => useContext(globalContext)

// const handler = {
//   getCocktail: (state, action) => ({
//     ...state,
//     cocktails: action.payload,
//   }),
// };
// const reducer = (state, action) => {

//   handler[action.type]
// }
