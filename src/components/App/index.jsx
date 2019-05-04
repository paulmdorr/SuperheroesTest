import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { SuperheroesList, SuperheroDetail } from '../Superheroes'
import { css } from 'astroturf'
import { getSuperhero } from '../../actions'

const styles = css`
  .wrapper {
    color: #212121;
    margin: 0 auto;
    font-family: 'sans serif';
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
    border: 1px solid transparent;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 90vh;
    grid-area: list;
    box-shadow: -5px 5px 10px 0px rgba(122, 127, 135, 0.55);
  }

  .detail {
    grid-area: detail;
    box-shadow: 5px 5px 10px 0px rgba(122, 127, 135, 0.55);
  }

  .header {
    text-align: center;
  }

  .placeholder {
    font-size: 50px;
    padding: 40vh 8vw;
    text-align: center;
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
            <Route exact path="/" component={() => <div className={styles.placeholder}>
              Please select a superhero
            </div>} />
            <Route path="/superhero/:id" render={props =>
              <SuperheroDetail loadSuperhero={loadSuperhero} {...props} />} />
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
