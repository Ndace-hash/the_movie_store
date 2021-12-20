// import {} from 'dotenv/config'
const searchBar = document.getElementById('search-bar')
const movieList = document.getElementById('movie-list')

var baseURL =''
var imageSize=''


// dotenv.config()
// const API_KEY = process.env.API_KEY;
async function fetchData() {
    const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=80620987d484f841a8e638e09a1b89ed&query=fast%20and%20furious&include_adult=true');
    const data = await res.json();

    console.log(data)
}

// fetchData();


async function getConfig(){
    const res = await fetch('https://api.themoviedb.org/3/configuration?api_key=80620987d484f841a8e638e09a1b89ed')
    const config = await res.json()
    const { images } = config
    baseURL = images.base_url;
    imageSize = images.poster_sizes[2]
    console.log(images)
    console.log(baseURL)

}

getConfig()

async function getPopularMovies() {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=80620987d484f841a8e638e09a1b89ed&language=en-US&page=1')
    const {results} = await res.json()
    console.log(results)
    return results;
}

getPopularMovies()
    .then(data => {
        data.forEach(movie => {
            const id = movie.id;
            const title = movie.title;
            const imagePath = movie.poster_path;
            const overview = movie.overview;
            const releaseDate = movie.release_date;
            return id, title, imagePath, overview, releaseDate
        });
    }).then((title,id,imagePath,overview,releaseDate) => {
        let result = ''

        result += `
        <article class="movie-card">
            <div class="img-container mb-1">
                <img src="${baseURL}${imageSize}${imagePath}" alt="${title}" class="img-fluid">
            </div>
            <h4 class="title mb-1 p-0 ps-1">${title}</h4>
            <P class="date p-0 ps-1">${releaseDate}</P>
        </article>`

        movieList.innerHTML = result;
    })

