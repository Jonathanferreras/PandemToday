import NewsAPI from 'newsapi'

const newsApiKey = process.env.NEWSAPI_KEY
const newsApi = new NewsAPI(newsApiKey)

export default newsApi
