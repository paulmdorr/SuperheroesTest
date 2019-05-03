import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchSuperheroes } from '../../actions'

function SuperheroesList(props) {
  const { fetchSuperheroes, superheroes, isLoading, error } = props
  const imageType = 'standard_medium'

  useEffect(() => {
    if (!isLoading && superheroes.length === 0 && !error) {
      fetchSuperheroes()
    }
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>ERROR!!!</div>
  }

  console.log(superheroes)
  return <ul>
    {superheroes.map(elem => <li>
      <Link to={`/superhero/${elem.id}`}>
        <div>{elem.name}</div>
        <div>
          <img src={`${elem.thumbnail.path}/${imageType}.${elem.thumbnail.extension}`} />
        </div>
        <div>{elem.comics.available > 0 ? 'yes' : 'no'}</div>
        <div>{elem.series.available > 0 ? 'yes' : 'no'}</div>
        <div>{elem.events.available > 0 ? 'yes' : 'no'}</div>
        <div>{elem.stories.available > 0 ? 'yes' : 'no'}</div>
      </Link>
    </li>)}
  </ul>
}

const mapStateToProps = state => {
  return {
    superheroes: state.superheroes,
    isLoading: state.isLoading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSuperheroes: () => {
      dispatch(fetchSuperheroes())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperheroesList)
