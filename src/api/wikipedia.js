import axios from 'axios'

const client = axios.create({
  baseURL: 'https://en.wikipedia.org/api/rest_v1/'
})

const getPageNameFromUrl = url => (url || '').split('/').pop()

export const getMediaFromUrl = url => {
  const page = getPageNameFromUrl(url)
  return client.get(`/page/media/${page}`)
}
