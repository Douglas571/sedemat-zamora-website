import type { Metadata, ResolvingMetadata } from 'next'

import ExportedImage from "next-image-export-optimizer";
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
        <figure className="mb-5 overflow-hidden relative min-h-[500px]">
          <ExportedImage
            src={news?.metadata.cover ?? ''}
            alt={news?.metadata.cover_alt ?? ''}
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
 
type Props = {
  params: Promise<{ slug: string }>
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
 
  const newsList = getNewsList()

  const news = newsList.find((news) => {
    return news.slug === slug
  })

  return {
    title: news?.metadata.title,
    description: news?.metadata.summary,
    openGraph: {
      //url: new URL("https://sedemat-zamora-website.vercel.app/"),
      url: new URL("http://sedematzamorafalcon.con.ve"),
      images: [
        {
          url: news?.metadata.cover_og ?? '',
          width: 800,
          height: 600,
          alt: news?.metadata.cover_og ?? ''
        }
      ],
    },
    metadataBase: new URL("http://sedematzamorafalcon.con.ve"),
  }
}

export const dynamicParams = false

export default NewsArticle