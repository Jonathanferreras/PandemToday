import { getArticles } from '../../../services/news/server'

export default async (req, res) => {
  try {
    const options = {}
    const data = await getArticles(options)
    res.statusCode = 200
    res.json(data)
  } catch (error) {
    console.log(error)
    res.statusCode = 500
    res.json({ message: 'An error occurred processing request!' })
  }
}
