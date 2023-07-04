

const Movie = ({movie}) => {
  return (
    <section className="contenedor-peliculas">
        <section className="titulo-Movies">{movie.title}</section>
    <img className="imagenesPeliculas" src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
    <p>Popularidad: {movie.popularity}</p>
    <p>{movie.overview}</p>
    </section>
  )
}

export default Movie