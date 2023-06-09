import { Link, useParams } from "react-router-dom";
import { MoviesServes } from "../../api/movie-api";
import { useState, useEffect } from "react";
import './index.scss'

const MovieiDetail = () => {
  const [filme, setFilme] = useState({});
    const { id } = useParams();

    async function getFilme() {
      const { data } = await MoviesServes.getMoviesDataill(id);
      setFilme(data)
    }

  useEffect(() => {
    getFilme();
   }, [])
  

  useEffect(() => {
      console.log(filme);
  })
  

  return (

    <section className="Movie">
      <div className="Movie__cont-img">
        <img alt="carregando" src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`}></img>
      </div>
      <div className="Movie__detail">
        <h1>{filme.title}</h1>
        <p><span>Reviu: </span> {filme.overview} </p>
        <p><span>Avaliação: </span> {filme.vote_average} </p>
        <p><span>Popularidade: </span> {filme.popularity} </p>
      </div>
      <Link to={"/"}>Voltar</Link>
    </section>
  )
}

export default MovieiDetail