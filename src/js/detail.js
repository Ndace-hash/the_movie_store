const API_KEY = "80620987d484f841a8e638e09a1b89ed";

const pageTitle = document.querySelector("title");
const banner = document.querySelector("#banner-img");
const movieTitle = document.querySelector(".title");
const movieBody = document.querySelector(".body");

async function getConfiguration() {
  const res = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
  );
  const { images } = await res.json();
  return images;
}

const configuration = async () => {
  let base_url = "";
  let image_size = "";
  const configuration = await getConfiguration();
  const { secure_base_url, still_sizes } = await configuration;
  base_url = await secure_base_url;
  image_size = await still_sizes[3];
  let url = base_url + image_size;

  return url;
  // .then((configuration) => {
  //   let base_url = configuration.secure_base_url;
  //   let image_size = configuration.still_sizes[3];
  //   return { base_url, image_size };
  // })
  // .then((object) => {
  //   base_url = object.base_url;
  //   image_size = object.image_size;
  //   let url = base_url + image_size;
  //   return url;
  // });
};
configuration();

const id = location.pathname.split("/")[2];
async function getDetail(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  console.log(data);
  return data;
}

async function getTvDetail(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();

  console.log(data);
  return data;
}

getDetail(id).then((data) => {
  if (data.original_title) {
    pageTitle.innerText = data.original_title;
    configuration().then((res) => {
      banner.src = res + data.backdrop_path;
    });
    movieTitle.innerText = data.original_title;
    movieBody.innerText = data.overview;
  } else {
    getTvDetail(id).then((data) => {
      pageTitle.innerText = data.name;
      configuration().then((res) => {
        banner.src = res + data.backdrop_path;
      });
      movieTitle.innerText = data.name;
      movieBody.innerText = data.overview;
      console.log(banner);
    });
  }
});
