import {createContext, useContext} from 'react'
import {Cocktail} from '../types'

interface GlobalState {
    cocktails?: Cocktail[],
    setCocktails: (cocktails: Cocktail[]) => void
}

const state: GlobalState = {
    cocktails: undefined,
    setCocktails: () => {}
}

export const GlobalContext = createContext<GlobalState>(state)

export const useGlobalContext = () => useContext(GlobalContext)