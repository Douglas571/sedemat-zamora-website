import { getNewsList } from "../util"


async function Article({
  params
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params
  const { default: Content } = await import(`@/app/content/news/${slug}`)

  return (
    <>
      <h1>Noticias</h1>
      <p>slug: {slug}</p>
      <Content/>
    </>
  )
}

export async function generateStaticParams() {
  const newsList = getNewsList()

  console.log({newsList})

  return newsList.map((news) => ({
    slug: news.slug,
  }))
}

export default Article