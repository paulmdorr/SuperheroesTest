import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Superhero(props) {
  const { superhero, match, loadSuperhero } = props
  const imageType = 'portrait_xlarge'

  useEffect(() => {
    if (!superhero) {
      loadSuperhero(match.params.id)
    }
  })

  return superhero ?
    <div>
      <h2>{superhero.name}</h2>
      <img src={`${superhero.thumbnail.path}/${imageType}.${superhero.thumbnail.extension}`} />
      <article>{superhero.description}</article>
      <ul>{superhero.urls.map(elem =>
        <li key={elem.type}>
          <a href={elem.url} target="_blank">{elem.type}</a>
        </li>
      )}
      </ul>
    </div>
    : ''
}

const mapStateToProps = ({ superhero }) => {
  return {
    superhero: superhero.superhero,
  }
}

export default connect(
  mapStateToProps
)(Superhero)
