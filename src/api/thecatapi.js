import axios from 'axios'

const token = '40d2880b-db8a-4e2c-be16-d1e03aadebdf'

const client = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    common: {
      'x-api-key': token
    }
  }
})

export const getBreeds = () => client.get('/breeds')
