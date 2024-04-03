import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Login from './views/login'
import Cart from './views/cart'
import Reciept from './views/reciept'
import Rooms from './views/rooms'
import SignUp from './views/sign-up'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/sign-up-page1" />
        <Route component={Cart} exact path="/cart" />
        <Route component={Reciept} exact path="/reciept" />
        <Route component={Rooms} exact path="/rooms" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
