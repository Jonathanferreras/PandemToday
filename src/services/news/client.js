import axios from 'axios'

export async function getArticles () {
  try {
    const response = await axios.get('/api/news')
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getArticlesByPage (page) {
  try {
    const response = await axios.post('/api/news', { page })
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getHeadlines () {}
