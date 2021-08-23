import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Routes} from './router'

import { GlobalContext } from './store'
import {Cocktail} from './types'

import Logo from './components/Logo'
import MainNav from './components/MainNav'

/* Pages */
import StartScreen from './pages/StartScreen';
import ApproDetail from './pages/ApproDetail';
import CocktailDetail from './pages/CocktailDetail';



const App =() =>{
  const [cocktails, setCocktails] = useState<Cocktail[]>()

  return (
    <GlobalContext.Provider value= {{ cocktails, setCocktails }}>
        <div className="App flex flex-col items-center h-screen">
          <Logo />
          <Router>
          <MainNav />
            <Switch>
              <Route path={Routes.FAVORITES_PAGE}>
                <ApproDetail />
              </Route>
              <Route path={`${Routes.COCKTAIL_DETAIL}/:cocktailId`}>
                <CocktailDetail />
              </Route>
              <Route path={Routes.HOME_PAGE}>
                <StartScreen />
              </Route>
            </Switch>
        </Router>
      </div>
    </GlobalContext.Provider>
    )
} 


export default App
