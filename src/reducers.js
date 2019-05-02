import {
  FETCH_SUPERHEROES_BEGIN,
  FETCH_SUPERHEROES_SUCCESS,
  FETCH_SUPERHEROES_FAILURE,
} from './actions'

const initialState = {
  currentSuperhero: null,
  superheroes: [],
  isLoading: false,
  error: null
}

export default function superheroesApp(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUPERHEROES_BEGIN:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SUPERHEROES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        superheroes: action.data
      }
    case FETCH_SUPERHEROES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}
