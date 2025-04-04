import Header from "@/components/Header"

import { getNewsList } from "../util"
import { Footer } from "@/components/Footer"

async function NewsArticle({
  params
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params
  const { default: Content } = await import(`@/app/content/news/${slug}`)

  console.log({Content})

  return (
    <>
      <Header/>

      <Article News={Content}/>
      
      <Footer/>
    </>
  )
}

interface ArticleProps {
  slug,
  News
}

const Article: React.FC<ArticleProps> = ({slug, News}) => {
  return (
    <main className="prose">
      <h1>Noticias</h1>
      <p>slug: {slug}</p>
      <News/>
    </main>
  )
}


export async function generateStaticParams() {
  const newsList = getNewsList()

  return newsList.map((news) => ({
    slug: news.slug,
  }))
}

export default NewsArticle