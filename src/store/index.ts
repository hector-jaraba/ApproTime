import {createContext, useContext} from 'react'
import {Cocktail} from '../types'

interface GlobalContext {
    cocktails?: Cocktail[],
    updateCocktails: (cocktails: Cocktail[]) => void
}

const context: GlobalContext = {
    cocktails: undefined,
    updateCocktails: () => {}
}

export const globalContext = createContext<GlobalContext>(context)

export const useGlobalContext = () => useContext(globalContext)