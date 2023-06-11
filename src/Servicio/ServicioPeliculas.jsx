export async function Peliculas() {
    const URL = "https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page="

    const INFO = {
        method: "GET"
    }

    let result = await fetch(URL, INFO)
    let response = await result.json()
    return (response.results)
}

