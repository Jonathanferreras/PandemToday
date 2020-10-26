import newsapi from '../../config/newsApi/newsApi'

export async function getArticles (options) {
  try {
    return await newsapi.v2.everything(options)
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getHeadlines (options) {
  try {
    return await newsapi.v2.topHeadlines(options)
  } catch (error) {
    console.log(error)
    return null
  }
}
