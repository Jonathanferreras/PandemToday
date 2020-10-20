import newsapi from '../../config/newsApi'

export async function getArticles (options) {
  try {
    return await newsapi.v2.everything({
      ...options,
      q: 'covid'
    })
  } catch (error) {
    console.log(error)
    return null
  }
}
