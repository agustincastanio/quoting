import axios from 'axios'

const BASE_URL = process.env.SERVER;

export const getQuotes = () => {
  return axios.get(`${BASE_URL}/api/v1/quotes`)
    .then(res => res.data.data)
}

export const createQuote = (quote) => {
  return axios.post(`${BASE_URL}/api/v1/quotes`, quote)
    .then(res => res.data.data)
}

export const updateQuote = (quote) => {
  return axios.put(`${BASE_URL}/api/v1/quotes/${quote.id}`, quote)
    .then(res => res.data.data)
}

export const deleteQuote = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/quotes/${id}`)
    .then(res => res.data.data)
}

export const getQuoteById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/quotes/${id}`)
    .then(res => res.data.data)
}

export const getQuoteStatus = () => {
  return axios.get(`${BASE_URL}/api/v1/quoteStatus`)
    .then(res => res.data.data)
}

export const getAllTypes= () => {
  return axios.get(`${BASE_URL}/api/v1/allTypes`)
    .then(res => res.data.data)
}




