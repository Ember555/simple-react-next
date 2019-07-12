import axios from 'axios'

const headers = { 'Content-Type': 'application/json' }

export const getJson = url =>
  axios({
    url,
    method: 'GET',
    headers,
  })

export const postJson = (url, data = {}) =>
  axios({
    url,
    method: 'POST',
    headers,
    data,
  })

export const postFile = (url, data) =>
  axios({
    url,
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
  })
