import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import * as Routes from './router'

import { GlobalProvider } from './context'
import { Provider as StoreProvider } from 'react-redux'
import store from './store'
import { Cocktail } from './types'

import MainLogo from './components/MainLogo'
import MainNav from './components/MainNav'

/* Pages */
import StartScreen from './pages/StartScreen'
import ApproDetail from './pages/Favorites'
import CocktailDetail from './pages/CocktailDetail'

const App: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([])

  return (
    <StoreProvider store={store}>
      <GlobalProvider value={{ cocktails, setCocktails }}>
        <div className="App flex flex-col items-center min-h-screen">
          <Router>
            <Link to={Routes.HOME_PAGE}>
              <MainLogo />
            </Link>
            <MainNav />
            <Switch>
              <Route path={Routes.FAVORITES_PAGE}>
                <ApproDetail />
              </Route>
              <Route path={`${Routes.COCKTAIL_DETAIL}`}>
                <CocktailDetail />
              </Route>
              <Route path={Routes.HOME_PAGE}>
                <StartScreen />
              </Route>
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    </StoreProvider>
  )
}

export default App
