import React, { useEffect } from 'react'

export default function(props) {
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
