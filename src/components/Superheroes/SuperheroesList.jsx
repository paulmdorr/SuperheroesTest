import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchSuperheroes } from '../../actions'

function SuperheroesList(props) {
  const { fetchSuperheroes, superheroes, isLoading, error, loadSuperhero } = props
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

  return <ul>
    {superheroes.map(elem => <li key={elem.id}>
      <Link to={`/superhero/${elem.id}`} onClick={() => loadSuperhero(elem.id)}>
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

const mapStateToProps = ({ superheroesList }) => {
  return {
    superheroes: superheroesList.superheroes,
    isLoading: superheroesList.isLoading,
    error: superheroesList.error
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
