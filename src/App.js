import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>

          <Router path="/about">
            <About />
          </Router>

          <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>

          <Router path="*">
            <Error />
          </Router>
        </Switch>
      </Router>
    </div>
  )
}

export default App
