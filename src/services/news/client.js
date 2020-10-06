import axios from 'axios'

export async function getArticles (options) {
  try {
    const response = await axios.get('/api/news')

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
