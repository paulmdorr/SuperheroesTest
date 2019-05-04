import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'astroturf'

const styles = css`
  .superhero {
    border-radius: 3px;
    border-top: 1px solid lightgray;
    color: #212121;
    display: grid;
    grid-template-columns: 33% 66%;
    grid-template-rows: auto;
    grid-template-areas: 
      "name name"
      "flags picture";
    padding-bottom: 10px;
    text-decoration: none;
    transition: margin-top .2s, margin-bottom .2s;
  }

  .superhero:hover {
    background: #edf7fc;
    box-shadow: 2px 2px 4px 0px rgba(122, 127, 135, 0.45);
    margin-bottom: 5px;
    margin-top: -5px;
    transition: margin-top .2s, margin-bottom .2s;
  }

  .name {
    grid-area: name;
    text-align: center;
    margin: 15px 0;
  }

  .flags {
    font-size: 14px;
    grid-area: flags;

    p {
      margin: 0 0 5px;
    }
  }

  .picture {
    grid-area: picture;
    text-align: center;
  }

  .notAvailable {
    color: lightgrey;
    text-decoration: line-through;
  }
`

function Superhero(props) {
  const {
    id, thumbnail, comics, series, events, stories, loadSuperhero, name, page
  } = props
  const imageType = 'standard_medium'

  return <li>
    <Link className={styles.superhero} to={`/superhero/${id}?page=${page}`} onClick={() => loadSuperhero(id)}>
      <h4 className={styles.name}>{name}</h4>
      <div className={styles.picture}>
        <img src={`${thumbnail.path}/${imageType}.${thumbnail.extension}`} />
      </div>
      <div className={styles.flags}>
        <p>Appears in:</p>
        <ul>
          <li className={!comics.available ? styles.notAvailable : ''}>Comics</li>
          <li className={!series.available ? styles.notAvailable : ''}>Series</li>
          <li className={!events.available ? styles.notAvailable : ''}>Events</li>
          <li className={!stories.available ? styles.notAvailable : ''}>Stories</li>
        </ul>
      </div>
    </Link>
  </li>
}

export default Superhero
