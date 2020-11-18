import { NEWS_LANGUAGE, NEWS_QUERY, NEWS_SOURCES } from '../../../config/newsApi/newsApiConstants'
import { getHeadlines } from '../../../services/news/server'

export default async (req, res) => {
  try {
    if (req.method !== 'GET' && req.method !== 'POST') {
      res.statusCode = 404
      res.json({ message: `Unsupported method ${req.method} received.` })
      return
    }

    const options = {
      q: NEWS_QUERY,
      sources: NEWS_SOURCES,
      language: NEWS_LANGUAGE
    }

    if (req.method === 'POST') {
      if (req.body.pageSize) {
        options.pageSize = req.body.pageSize
      }
    }

    const data = await getHeadlines(options)

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
