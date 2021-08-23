import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Routes} from './router'

import Logo from './components/Logo'
import MainNav from './components/MainNav'

/* Pages */
import StartScreen from './pages/StartScreen';
import ApproDetail from './pages/ApproDetail';



const App =() => (
    <div className="App flex flex-col items-center h-screen">
      <Logo />
      <Router>
      <MainNav />
        <Switch>
          <Route path={Routes.APPRO_DETAIL}>
            <ApproDetail />
          </Route>
          <Route path={Routes.HOME_PAGE}>
            <StartScreen />
          </Route>
        </Switch>
    </Router>
    </div>
  )


export default App
