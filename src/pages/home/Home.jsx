import { useEffect, useState } from "react";
import { MoviesServes } from "../../api/movie-api";
import MovieCard from "../../components/movieCard/MovieCard";
import './index.scss'

const Home = () => {

  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
      const { data: {results} } =  await MoviesServes.getMovies();
      setMovie(results)
  }

  useEffect(()=> {
    getMovie();
  },[])

  useEffect(()=> {
    console.log(movie);
  })

  return (
        <div className="Home"> {movie.map((movie)=>
          <MovieCard key={movie.id} propMovie={movie} />
        )}
        </div>
    
  );
}

export default Home;