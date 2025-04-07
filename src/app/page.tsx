import Image from "next/image";
import React from 'react';

import { AiOutlineMenu } from "react-icons/ai";

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Header from '@/components/Header'

import { getNewsList } from "../app/news/util" 
import { getGuidesList } from "@/lib/guides";
import { Footer } from "@/components/Footer";
import { getBillsList } from "@/lib/bills";
import BillSectionCard from "@/components/BillSectionCard";
import GuideSectionCard from "@/components/GuideSectionCard";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh]">

      <Header/>

      <Main/>

      <Footer/>
    </div>
  );
}

const Main: React.FC = () => {
  return (
    <main className="grow-[1]">
      <Banner/>

      <div className="px-10 max-w-[900px] m-auto">
        <GuideSection/>

        <BillsSection/>

        <NewsSection/>
      </div>
      
    </main>
  )
}

const Banner = () => {
  return (
    <>
      <div className="bg-blue-600 flex justify-center items-center mb-10">
        <div className="py-40 px-10 mx-1 text-neutral-100 text-center">
          <h1 className="text-3xl font-bold">
          Servicio Desconcentrado Municipal de
            Administración Tributaria
          </h1>

          <h2 className="text-2xl font-bold">
            Oficina Principal: Delicias 2, Alcaldía del Municipio Zamora, plnata baja.
          </h2>
        </div>
      </div>
    </>
  )
}

interface SectionHeaderProps {
  title: string,
  viewMoreLink: string
}
const SectionHeader: React.FC<SectionHeaderProps> = ({title, viewMoreLink}) => {
  return (<div className="pb-5 flex justify-between items-end ">
    <h1 className="font-bold text-4xl">{title}</h1>
    <Link className="text-blue-500 underline" href={viewMoreLink}>Ver más</Link>
  </div>)
}

const GuideSection: React.FC = () => {

  const guidesList = getGuidesList()

  const cards = guidesList.slice(0, 3).map((g, idx) => {
    return (<GuideSectionCard {...g} key={idx}/>)
  })

  return (
    <div className="mb-16">

      <SectionHeader title="Guías" viewMoreLink="/guides"/>
      <div className="flex flex-col gap-5">
        {cards}
      </div>
    </div>
  )
}

const BillsSection: React.FC = () => {
  
  const billsList = getBillsList()

  const cards = billsList.slice(0, 3).map((bill, idx) => {
    return (<BillSectionCard {...bill} key={idx} />)
  })

  
  return (

    <div className="mb-16">
       <SectionHeader title="Ordenanzas" viewMoreLink="/bills"/>

      <div className="flex flex-col gap-5">
        {cards}
      </div>
    </div>
  )
}

const NewsSection: React.FC = () => {


  const newsList = getNewsList()

  return (
    <div className="mb-16">
      <SectionHeader title="Noticias" viewMoreLink="/news"/>

      <div className="flex flex-col gap-5">
        {newsList.map( (doc, idx) => {

          // let className = ''

          // if (idx === 0) {
          //   className = 'lg:row-span-2'
          // } else if (idx === 2) {
          //   className = 'lg:col-start-2 lg:row-start-2'
          // }

          return <NewsCard 
            key={String(idx)}
            title={doc.metadata.title} 
            publishedAt={doc.metadata.publishedAt}
            imageSrc={doc.metadata?.cover ?? null}
            link={`/news/${doc.slug}`}

            // className={className}
          />
        })}
      </div>

    </div>
  )
}

interface NewsCardProps {
  title: string,
  publishedAt: string,
  imageSrc: string,
  link: string,

  className?: string
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  publishedAt,
  imageSrc,
  link,

  className
}) => {

  return (
  
  <Card className={className ?? ''}>
    <div className={'flex flex-col p-6 gap-5 md:flex-row '}>
      <header>
        <div className="overflow-hidden rounded-md bg-red-500 ">


          <figure className="relative aspect-[4/3] min-w-[300px]">
            <Image
                src={imageSrc}
                alt={`Photo by Douglas Socorro`}
                className=""
                fill={true}
                objectFit="cover"

              />
          </figure>
        </div>
      </header>
      <div className="flex flex-col md:justify-between">
        <CardContent>
          <h1 className="text-3xl">{title}</h1>
          <CardDescription>{publishedAt}</CardDescription>
        </CardContent>
        <CardFooter className="">
          <Link href={link ?? '/news'} className="text-blue-500 underline">Leer más</Link>
        </CardFooter>
      </div>
      
      
    </div>
  </Card>)
}