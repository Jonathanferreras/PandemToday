import NewsAPI from 'newsapi'

const newsApiKey = process.env.NEWSAPI_KEY
const newsApi = new NewsAPI(newsApiKey)

export async function getArticles (options) {
  try {
    return await newsApi.v2.everything({
      ...options,
      q: 'covid'
    })
  } catch (error) {
    console.log(error)
    return null
  }
}
