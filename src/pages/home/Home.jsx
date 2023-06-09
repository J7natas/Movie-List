import { useEffect, useState } from "react";
import { MoviesServes } from "../../api/movie-api";
import MovieCard from "../../components/movieCard/MovieCard";
import './index.scss'

const Home = ({ inputValue }) => {

  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
      const { data: {results} } =  await MoviesServes.getMovies();
      setMovie(results)
  }

  const handlerMovie = async (movieString) => {
    const { data: {results} } = await MoviesServes.getMoieSearch(movieString);
    
    setMovie(results)
  }

  useEffect(()=> {
    getMovie();
  },[])

  useEffect(()=> {
    if(inputValue) {
      handlerMovie(inputValue);
    }
    if(inputValue === '') {
      getMovie();
    }
  },[inputValue])


    return (
      <div className="Home"> {movie.map((movie)=>
        <MovieCard key={movie.id} propMovie={movie} />
      )}
      </div>
  );
}

export default Home;