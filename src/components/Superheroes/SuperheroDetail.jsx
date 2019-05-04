import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { fetchSuperheroes } from '../../actions'
import { css } from 'astroturf'

const styles = css`
  .superhero {
    display: grid;
    grid-template-columns: 66% 33%;
    grid-template-rows: auto;
    grid-template-areas: 
      "name name"
      "description picture"
      "links links";
    padding: 20px 40px;
  }

  .name {
    grid-area: name;
    text-align: center;
  }

  .description {
    grid-area: description;
    padding: 20px;
  }

  .picture {
    grid-area: picture;
    text-align: right;
  }

  .links {
    grid-area: links;
    list-style-type: none;
    padding: 10px;

    li {
      display: inline-block;
      padding: 10px;
    }
  }
`

function SuperheroDetail(props) {
  const {
    superhero, match, loadSuperhero, fetchSuperheroes,
    limit, currentPage, location, isLoading
  } = props
  const imageType = 'portrait_xlarge'

  useEffect(() => {
    const query = queryString.parse(location.search)

    if (!isLoading && !superhero) {
      if (currentPage !== query.page) {
        fetchSuperheroes(limit, parseInt(query.page, 10))
      }

      loadSuperhero(match.params.id)
    }
  })

  return superhero ?
    <div className={styles.superhero}>
      <h2 className={styles.name}>{superhero.name}</h2>
      <img
        src={`${superhero.thumbnail.path}/${imageType}.${superhero.thumbnail.extension}`}
        className={styles.picture}
      />
      <article className={styles.description}>{superhero.description}</article>
      <ul className={styles.links}>{superhero.urls.map(elem =>
        <li key={elem.type}>
          <a href={elem.url} target="_blank">{elem.type}</a>
        </li>
      )}
      </ul>
    </div>
    : ''
}

const mapStateToProps = ({ superhero, superheroesList }) => {
  return {
    superhero: superhero.superhero,
    limit: superheroesList.limit,
    currentPage: superheroesList.currentPage,
    isLoading: superheroesList.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSuperheroes: (limit, page) => {
      dispatch(fetchSuperheroes(limit, page))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperheroDetail)
