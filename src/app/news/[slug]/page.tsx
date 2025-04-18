import Image from "next/image"
import Header from "@/components/Header"

import { getNewsList } from "../util"
import { Footer } from "@/components/Footer"
import { CustomMDX } from "@/components/mdx"

async function NewsArticle({
  params
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params
  
  const newsList = getNewsList()

  const news = newsList.find((news) => {
    return news.slug === slug
  })

  return (
    <>
      <Header/>

      <main className="pb-16 flex flex-col">
        <figure className="mb-5 overflow-hidden relative bg-red-500 min-h-[500px]">
          <Image
            src={news?.metadata.cover ?? ''}
            alt={`Photo by Douglas Socorro`}
            className=""
            fill={true}
            objectFit="cover"

          />
          <figcaption>Photo by Douglas Socorro</figcaption>

        </figure>
      
        <div className="px-10 prose self-center">
          <CustomMDX source={news.content}/>
        </div>
        
      </main>
      
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
      <h1></h1>
      <p>slug: {slug}</p>
      <News/>
    </main>
  )
}


export async function generateStaticParams() {
  const newsList = getNewsList()

  console.log(newsList.map( n => n.slug).join(', '))

  return newsList.map((news) => ({
    slug: news.slug,
  }))
}

export const dynamicParams = false

export default NewsArticle