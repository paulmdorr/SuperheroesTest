import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppWrapper from './src/containers/AppWrapper'
import superheroesApp from './src/reducers'

const store = createStore(superheroesApp, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('app')
)
