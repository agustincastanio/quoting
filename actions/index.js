import axios from 'axios'

const BASE_URL = process.env.SERVER;

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`)
    .then(res => res.data)
}

export const createMovie = (movie) => {
  //movie.id = Math.random().toString(36).substr(2, 7)

  return axios.post(`${BASE_URL}/api/v1/movies`, movie)
    .then(res => res.data)
}

export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data)
}

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`)
    .then(res => res.data)
}

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`)
    .then(res => res.data)
}

export const getCategories = () => {
  return axios.get(`${BASE_URL}/api/v1/categories`)
    .then(res => res.data)
}






