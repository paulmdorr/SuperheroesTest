import { baseUrl, authQuery } from './config/APIConfig'
import axios from 'axios'

/*
 * action types
 */

export const FETCH_SUPERHEROES_BEGIN = 'FETCH_SUPERHEROES_BEGIN'
export const FETCH_SUPERHEROES_SUCCESS = 'FETCH_SUPERHEROES_SUCCESS'
export const FETCH_SUPERHEROES_FAILURE = 'FETCH_SUPERHEROES_FAILURE'
export const FETCH_SUPERHERO = 'FETCH_SUPERHERO'
/*
 * action creators
 */

export function fetchSuperheroesBegin() {
  return {
    type: FETCH_SUPERHEROES_BEGIN,
  }
}

export function fetchSuperheroesSuccess(data) {
  return {
    type: FETCH_SUPERHEROES_SUCCESS,
    data
  }
}

export function fetchSuperheroesFailure(error) {
  return {
    type: FETCH_SUPERHEROES_FAILURE,
    error
  }
}

export function getSuperhero(id, superheroes) {
  const idAsInt = parseInt(id, 10)

  return {
    type: FETCH_SUPERHERO,
    superhero: superheroes.find(elem => elem.id === idAsInt)
  }
}

export function fetchSuperheroes() {
  return dispatch => {
    dispatch(fetchSuperheroesBegin())
    return axios(`${baseUrl}${authQuery}`)
      .then(res => {
        const marvelRes = res.data
        dispatch(fetchSuperheroesSuccess(marvelRes.data.results))
        return marvelRes.data.results
      })
      .catch(error =>
        dispatch(fetchSuperheroesFailure(error))
      )
  }
}
