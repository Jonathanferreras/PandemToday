import { NEWS_QUERY, NEWS_SOURCES, NEWS_LANGUAGE } from '../../../config/newsApi/newsApiConstants'
import { getArticles } from '../../../services/news/server'

export default async (req, res) => {
  try {
    if (req.method !== 'GET' || req.method !== 'POST') {
      throw new Error('Unsupported method received!')
    }

    const options = {
      q: NEWS_QUERY,
      sources: NEWS_SOURCES,
      language: NEWS_LANGUAGE
    }

    if (req.method === 'POST') {
      options.page = req.body.page
    }

    const data = await getArticles(options)

    if (data && data.articles.length > 0) {
      res.statusCode = 200
      res.json(data)
    } else {
      res.statusCode = 204
      res.json({ message: 'No data available at this time.' })
    }
  } catch (error) {
    console.log(error)
    res.statusCode = 500
    res.json({ message: 'An error occurred processing request.' })
  }
}
