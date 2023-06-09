import { Link } from 'react-router-dom'
import './index.scss'

const MovieCard = ({ propMovie }) => {
  return (
    <section className="MovieCard">
        <div className="MovieCard__Container">
            <img  src={`https://image.tmdb.org/t/p/w1280${propMovie.poster_path}`}></img>
            <p>{propMovie.title}</p>
        </div>
        <button>
         <Link to={`/movie/${propMovie.id}`}>Ver Detalhe</Link>
        </button>
    </section>
  )
}


//`https://image.tmdb.org/t/p/w1280${propMovie.poster_path}`

export default MovieCard