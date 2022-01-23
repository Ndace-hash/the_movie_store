const searchBar = document.getElementById("search-bar");

const API_KEY = "80620987d484f841a8e638e09a1b89ed";
var base_url = "";
var image_size = "";
export let baseUrl;

async function getConfiguration() {
  const res = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
  );
  const { images } = await res.json();
  return images;
}

(async () => {
  baseUrl = await getConfiguration()
    .then((configuration) => {
      base_url = configuration.secure_base_url;
      image_size = configuration.still_sizes[3];
      return base_url + image_size;
    })
    .catch((err) => console.error(err));
})();

export async function getQuery() {
  let query = searchBar.value.trim().toLowerCase().replaceAll(" ", "%20");

  if (query) {
    const resMovie = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
    );

    const resTv = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
    );
    const movie = await resMovie.json();
    const tv = await resTv.json();
    return { movie, tv };
  }
}

export async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const { results } = await res.json();
  return results;
}
