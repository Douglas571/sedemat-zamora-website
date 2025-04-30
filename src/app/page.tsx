import ExportedImage from "next-image-export-optimizer";
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
import NewsSectionCard from "@/components/NewsSectionCard";

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
      

      <div className='relative mb-10 h-[500px]'>
        <figure className='
          relative 

          min-h-[100%] 
          md:min-h-[500px] 

          backdrop-blur-lg
          '>
          <ExportedImage
            className=''

            src='/images/main_banner.jpg'
            fill={true}
            alt="guides banner"
            objectFit='cover' 

          />

          <div className="
            absolute 
            h-[100%] 
            md:min-w-[100%]
          
            bg-blue-600 
            bg-opacity-75 
            flex 
            justify-center 
            items-center 
            mb-10 
            
            ">
            <div className="py-40 px-10 mx-1 text-neutral-100 text-center">
              <h1 className="text-3xl font-bold">
              Servicio Desconcentrado Municipal de Administración Tributaria
              </h1>

              <Link href='https://www.google.com/maps/place/FJGG%2BHM3/data=!4m7!3m6!1s0x8e84235b11c277df:0xadd90f98d02e27ea!8m2!3d11.4763586!4d-69.3733773!16s%2Fg%2F11tjbvnlfz!19sChIJ33fCEVsjhI4R6icu0JgP2a0?coh=219680&utm_campaign=tt-rcs&entry=tts&g_ep=EgoyMDI1MDEyMi4wIPu8ASoASAFQAw%3D%3D'>
                <h2 className="text-2xl font-bold">
                  Oficina Principal: Delicias II, Planta Baja, Sede Alí Primera - Alcaldía de Zamora
                </h2>
              </Link>
            </div>
          </div>
        </figure>

        
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

          return <NewsSectionCard 
            key={String(idx)}
            title={doc.metadata.title} 
            publishedAt={doc.metadata.publishedAt}
            cover={doc.metadata?.cover ?? null}
            slug={doc.slug}

            // className={className}
          />
        })}
      </div>

    </div>
  )
}