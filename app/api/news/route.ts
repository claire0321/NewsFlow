export async function GET() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`
    //   `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`
    )

    const data = await res.json()

    return Response.json(data)

  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    )
  }
}