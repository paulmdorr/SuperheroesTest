import { combineReducers } from 'redux'
import {
  FETCH_SUPERHEROES_BEGIN,
  FETCH_SUPERHEROES_SUCCESS,
  FETCH_SUPERHEROES_FAILURE,
  FETCH_SUPERHERO,
} from './actions'

const initialState = {
  pages: 0,
  limit: 20,
  currentSuperhero: null,
  superheroes: [],
  isLoading: false,
  error: null
}

function superheroesList(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUPERHEROES_BEGIN:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SUPERHEROES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case FETCH_SUPERHEROES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        superheroes: action.superheroes,
        limit: action.limit,
        pages: action.pages,
        currentPage: action.currentPage
      }
    default:
      return state
  }
}

function superhero(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUPERHERO:
      return {
        ...state,
        isLoading: false,
        superhero: action.superhero
      }
    default:
      return state
  }
}

export default combineReducers({
  superheroesList,
  superhero
})
