import axios from 'axios';

export const getTrendingMovies = async ({ abortController }) => {
  const config = {
    url: 'https://api.themoviedb.org/3/trending/movie/week',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzg2ZmIyMTg1OWFhYzYyNWM0YWNiNjM4NmVmYzBjMiIsInN1YiI6IjY1YzlmMzhkMDgzNTQ3MDE2M2NmNjM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-jW2wFpPU6apB08bV7SSve4-FFnODyHgVHONM_pLdrU',
    },
    params: {
      language: 'en-US',
    },
    signal: abortController.signal,
  };
  const response = await axios.request(config);
  return response.data.results;
};
