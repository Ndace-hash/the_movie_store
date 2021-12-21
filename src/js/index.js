// import {} from 'dotenv/config'
// const searchBar = document.getElementById('search-bar')

// // dotenv.config()
// // const API_KEY = process.env.API_KEY;

const movieList = document.getElementById('movie-list')

var base_url = ''
var image_size = ''
const API_KEY = '80620987d484f841a8e638e09a1b89ed'


async function getConfiguration(){
    const res = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
    const { images } = await res.json()
    return images
}

getConfiguration()
    .then((configuration) => {
        base_url = configuration.secure_base_url
        image_size = configuration.still_sizes[3]
        return {base_url, image_size}
    })
    .then((object) => {
        getPopularMovies()
        .then(popularMovies => {
            let list = ''
            popularMovies.forEach(movie => {
                list += `
                <article class="movie-card">
                <div class="img-container mb-1">
                    <img src="${object.base_url + object.image_size + movie.poster_path}" alt="${movie.title}" class="img-fluid w-100">
                </div>
                <h4 class="title mb-1 p-0 ps-1">${movie.title}</h4>
                <P class="date p-0 ps-1">${movie.release_date}</P>
            </article>`
            movieList.innerHTML = list;
            });
        })
    })
    .catch((err) => {
        console.log(err)
    })
    

async function getPopularMovies(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const {results} = await res.json()
    return results

}