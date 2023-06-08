import { Link } from 'react-router-dom'
import './index.scss'

const MovieCard = ({ propMovie }) => {
  return (
    <section className="MovieCard">
        <div className="MovieCard__Container">
            <img  src={`https://image.tmdb.org/t/p/w1280${propMovie.poster_path}`}></img>
            <p>{propMovie.title}</p>
            <Link to={`/movie/:${propMovie.id}`}>Ver Detalhe</Link>
        </div>
    </section>
  )
}


//`https://image.tmdb.org/t/p/w1280${propMovie.poster_path}`

export default MovieCard