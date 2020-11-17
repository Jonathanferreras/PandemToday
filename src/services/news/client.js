import axios from 'axios'
import qs from 'qs'
import { NEWS_API_ENDPOINTS } from '../../config/newsApi/newsApiConstants'

export async function getArticles () {
  try {
    const response = await axios.get(NEWS_API_ENDPOINTS.articles)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getArticlesByPage (pageNumber) {
  try {
    const config = {
      method: 'post',
      url: NEWS_API_ENDPOINTS.articles,
      data: qs.stringify({ page: pageNumber }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    const response = await axios(config)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getArticlesForLandingPage () {
  try {
    const count = 4
    const config = {
      method: 'post',
      url: NEWS_API_ENDPOINTS.articles,
      data: qs.stringify({ pageSize: count }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    const response = await axios(config)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getHeadlines () {
  try {
    const response = await axios.get(NEWS_API_ENDPOINTS.headlines)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getHeadlinesForLandingPage () {
  try {
    const count = 3
    const config = {
      method: 'post',
      url: NEWS_API_ENDPOINTS.headlines,
      data: qs.stringify({ pageSize: count }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    const response = await axios(config)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
