import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSuperheroes } from '../../actions'

function SuperheroesList(props) {
  const { fetchSuperheroes, superheroes, isLoading, error } = props

  useEffect(() => {
    if (superheroes.length === 0 && !isLoading) {
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
  return <div>Hello!</div>
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
