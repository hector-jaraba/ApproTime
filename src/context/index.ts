import { createContext, useContext } from "react";
import { Cocktail } from "../types";

interface GlobalState {
  cocktails: Cocktail[];
  setCocktails: (cocktails: Cocktail[]) => void;
}

const state: GlobalState = {
  cocktails: [],
  setCocktails: () => {},
};

const GlobalContext = createContext<GlobalState>(state);

export const GlobalProvider = GlobalContext.Provider;

export const useGlobalContext = () => useContext(GlobalContext);

// const handler = {
//   getCocktail: (state, action) => ({
//     ...state,
//     cocktails: action.payload,
//   }),
// };
// const reducer = (state, action) => {

//   handler[action.type]
// }
