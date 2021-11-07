import Home from "./pages/Home"
import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Tuto from "./pages/Tuto"
import Plans from "./pages/Plans"
import Payment from "./pages/Payment"
import Delivery from "./pages/Delivery"
import { app } from "./firebase-config"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tuto" component={Tuto} />
        <Route path="/plans" component={Plans} />
        <Route path="/payment" component={Payment} />
        <Route path="/delivry" component={Delivery} />
      </Switch>
    </Router>
  )
}

export default App
