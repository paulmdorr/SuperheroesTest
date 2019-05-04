import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { fetchSuperheroes } from '../../actions'
import { css } from 'astroturf'
import Superhero from './Superhero'

const styles = css`
  .pagination {
    display: flex;
    list-style-type: none;
    margin: 10px 0 0;
    padding-left: 15px;
    padding-right: 15px;

    li {
      background: #d56062;
      border: 1px solid transparent;
      border-radius: 3px;
      color: #fafafa;
      cursor: pointer;
      font-size: 12px;
      margin: 2px;

      a {
        display: block;
        padding: 5px;
      }
    }
  }

  .superheroes {
    list-style-type: none;
    margin: 20px 0;
    overflow-y: scroll;
    padding: 0 20px;
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

  return <React.Fragment>
    <ReactPaginate
      pageCount={pages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={styles.pagination}
      activeClassName={'active'}
      forcePage={currentPage}
    />
    <ul className={styles.superheroes}>
      {superheroes.map(elem => <Superhero {...elem} key={elem.id}
        loadSuperhero={loadSuperhero} page={currentPage}
      />)}
    </ul>
  </React.Fragment>
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
