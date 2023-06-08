import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { MoviesServes } from "../../api/movie-api";

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

    <section className="MovieDatail">
      <div>{filme.title}</div>
    </section>
  )
}

export default MovieiDetail