import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { SuperheroesList } from '../Superheroes'

function App(props) {
  return <Router>
    <div>
      <Helmet>
        <title>Superheroes App</title>
        <meta name="description" content="See all of your favourite heroes' stories here!" />
      </Helmet>
      <main>
        <Switch>
          <Route path="/" component={SuperheroesList} />
        </Switch>
      </main>
    </div>
  </Router>
}

export default App
