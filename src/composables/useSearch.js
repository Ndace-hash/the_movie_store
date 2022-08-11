import { ref } from "vue";

const BASE_URL = "https://api.themoviedb.org";

export const searchQuery = ref("");

// database configuration
export const getConfiguration = async () => {
  const res = await fetch(
    `${BASE_URL}/3/configuration?api_key=${import.meta.env.VITE_API_KEY}`
  );
  const { images } = await res.json();
  return images;
};

export const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const { results } = await res.json();
  return results;
};

export const loadMovieURL = async () => {
  const configuration = await getConfiguration().then((configuration) => {
    const base_url = configuration.secure_base_url;
    const image_size = configuration.still_sizes[3];
    return { base_url, image_size };
  });

  return configuration;
};
