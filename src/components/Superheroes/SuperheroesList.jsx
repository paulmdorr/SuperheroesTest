import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { fetchSuperheroes } from '../../actions'
import { css } from 'astroturf'

const styles = css`
  .pagination {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }
`

function SuperheroesList(props) {
  const {
    fetchSuperheroes, superheroes, isLoading,
    error, loadSuperhero, pages, limit, currentPage
  } = props
  const imageType = 'standard_medium'

  const handlePageClick = data => {
    fetchSuperheroes(limit, data.selected)
  }

  useEffect(() => {
    if (!isLoading && superheroes.length === 0 && !error) {
      fetchSuperheroes(limit, 0)
    }
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>ERROR!!!</div>
  }

  return <div>
    <ReactPaginate
      pageCount={pages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={styles.pagination}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      forcePage={currentPage}
    />
    <ul>
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
  </div>
}

const mapStateToProps = ({ superheroesList }) => {
  return superheroesList
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
)(SuperheroesList)
