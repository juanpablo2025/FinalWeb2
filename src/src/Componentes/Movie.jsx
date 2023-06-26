<<<<<<< HEAD


const Movie = ({movie}) => {
  return (
    <div>
        <h5>{movie.title}</h5>
    <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
    <p>Popularidad: {movie.popularity}</p>
    <p>{movie.overview}</p>
    </div>
  )
}

=======


const Movie = ({movie}) => {
  return (
    <div>
        <h5>{movie.title}</h5>
    <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
    <p>Popularidad: {movie.popularity}</p>
    <p>{movie.overview}</p>
    </div>
  )
}

>>>>>>> 584f500e553dc6beb1cebba2ded75d1a06ca788e
export default Movie