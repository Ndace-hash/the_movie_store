import { baseUrl, getQuery, getPopularMovies } from "./config.js";

// // dotenv.config()

const searchBar = document.getElementById("search-bar");
const movieList = document.getElementById("movie-list");
const searchButton = document.getElementById("search-btn");

const API_KEY = "80620987d484f841a8e638e09a1b89ed";

getPopularMovies()
  .then(async (popularMovies) => {
    let list = "";
    popularMovies.forEach((movie) => {
      list += `
    <article class="movie-card" tabindex="0" id="${
      movie.id
    }" onclick="return getDetail(${movie.id})">
    <div class="img-container mb-1">
    <img src="${baseUrl + movie.poster_path}" alt="${
        movie.title
      }" class="img-fluid w-100">
    </div>
    <h4 class="title mb-1 p-0 ps-1">${movie.title}</h4>
    <P class="date p-0 ps-1">${movie.release_date}</P>
    </article>`;
      movieList.innerHTML = list;
    });
  })
  .catch((err) => {
    console.error(err);
  });

// handling search queries

searchButton.addEventListener("click", searchQuery);

function searchQuery() {
  getQuery()
    .then((object) => {
      const movies = object.movie;
      const tvs = object.tv;
      let list = "";

      movies.results.forEach((movie) => {
        list += `
                <article class="movie-card" tabindex="0" data-id="${
                  movie.id
                }" onclick="return getDetail(${movie.id})">
                <div class="img-container mb-1">
                    <img src="${baseUrl + movie.poster_path}" alt="${
          movie.title
        }" class="img-fluid w-100">
                </div>
                <h4 class="title mb-1 p-0 ps-1">${movie.title}</h4>
                <P class="date p-0 ps-1">${movie.release_date}</P>
            </article>`;
      });
      tvs.results.forEach((tv) => {
        list += `
                <article class="movie-card" tabindex="0" onclick="return getTvDetail(${
                  tv.id
                })">
                <div class="img-container mb-1">
                    <img src="${baseUrl + tv.poster_path}" alt="${
          tv.title
        }" class="img-fluid w-100">
                </div>
                <h4 class="title mb-1 p-0 ps-1">${tv.name}</h4>
                <P class="date p-0 ps-1">${tv.first_air_date}</P>
            </article>`;
      });

      movieList.innerHTML = list;
      console.log(movies, tvs);
    })
    .catch((err) => console.log(err));
}

let skeleton = `
<div class="skeleton-card">
      <div class="skeleton skeleton-img mb-1"></div>
      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>
      <p class="skeleton skeleton-date p-0 ps-1"></p>
    </div>
    <div class="skeleton-card">
      <div class="skeleton skeleton-img mb-1"></div>
      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>
      <p class="skeleton skeleton-date p-0 ps-1"></p>
    </div>
    <div class="skeleton-card">
      <div class="skeleton skeleton-img mb-1"></div>
      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>
      <p class="skeleton skeleton-date p-0 ps-1"></p>
    </div>
    <div class="skeleton-card">
      <div class="skeleton skeleton-img mb-1"></div>
      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>
      <p class="skeleton skeleton-date p-0 ps-1"></p>
    </div>
    <div class="skeleton-card">
      <div class="skeleton skeleton-img mb-1"></div>
      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>
      <p class="skeleton skeleton-date p-0 ps-1"></p>
    </div>
    <div class="skeleton-card">
      <div class="skeleton skeleton-img mb-1"></div>
      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>
      <p class="skeleton skeleton-date p-0 ps-1"></p>
    </div>
    <div class="skeleton-card">
      <div class="skeleton skeleton-img mb-1"></div>
      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>
      <p class="skeleton skeleton-date p-0 ps-1"></p>
    </div>
    <div class="skeleton-card">
      <div class="skeleton skeleton-img mb-1"></div>
      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>
      <p class="skeleton skeleton-date p-0 ps-1"></p>
    </div>`;
let skeletonStyle = `
<style>
    .skeleton {
        background-color: green;
        border-radius: 7px;
        animation: skeleton 2s ease infinite alternate;
        opacity: 0.7;
    }
    .skeleton-card {
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0;
    }
    .skeleton-img {
        height: 12rem;
    }
    .skeleton-title {
        height: 1.4rem;
        width: 10rem;
    }
    .skeleton-date {
        height: 0.7rem;
        width: 3rem;
    }

    @keyframes skeleton {
        0% {
            background: linear-gradient(to bottom right, #f1f1f1da, #7e7d7d);
        }
        15% {
            background: linear-gradient(to bottom right, #e9e5e5ec, #929191ef);
        }
        24% {
            background: linear-gradient(to bottom right, #d8d6d6ec, #9c9b9bef);
        }
        56% {
            background: linear-gradient(to bottom right, #b4b3b3f3, #acaaaadc);
        }
        79% {
            background: linear-gradient(to bottom right, #b4b2b2d0, #cecbcbc7);
        }
        87% {
            background: linear-gradient(to bottom right, #a3a1a1d0, #dbd9d9c7);
        }
        100% {
            background: linear-gradient(to bottom right, #a09e9ee3, #dbdadae3);
        }
    }
</style>`;
movieList.innerHTML = skeleton + skeletonStyle;
