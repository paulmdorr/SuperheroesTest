import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { SuperheroesList, Superhero } from '../Superheroes'
import { css } from 'astroturf'
import { getSuperhero } from '../../actions'

const styles = css`
  .wrapper {
    margin: 0 auto;
    height: 90vh;
    max-width: 1024px;
  }
  
  .main {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-template-areas: 
      "list detail detail";
  }

  .list {
    border: 1px solid black;
    height: 90vh;
    grid-area: list;

    ul {
      height: 85vh;
      overflow-y: scroll;
    }
  }

  .detail {
    grid-area: detail;
  }
`

function App({ superhero, superheroes, getSuperhero }) {
  const superheroName = superhero ? ` - ${superhero.name}` : ''

  const loadSuperhero = id => {
    getSuperhero(id, superheroes)
  }

  return <Router>
    <div className={styles.wrapper}>
      <Helmet>
        <title>{`Superheroes App${superheroName}`}</title>
        <meta name="description" content="See all of your favourite superheroes stories here!" />
      </Helmet>
      <header className={styles.header}>
        <h1>Superheroes App</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.list}>
          <SuperheroesList loadSuperhero={loadSuperhero} />
        </section>
        <section className={styles.detail}>
          <Switch>
            <Route exact path="/" component={() => <div>index</div>} />
            <Route path="/superhero/:id" render={props =>
              <Superhero loadSuperhero={loadSuperhero} {...props} />} />
          </Switch>
        </section>
      </main>
    </div>
  </Router>
}

const mapStateToProps = ({ superhero, superheroesList }) => {
  return {
    superheroes: superheroesList.superheroes,
    superhero: superhero.superhero,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSuperhero: (id, superheroes) => {
      dispatch(getSuperhero(id, superheroes))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
