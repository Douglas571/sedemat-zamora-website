import Image from "next/image";
import React from 'react';

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh]">

      <Header/>

      <Main/>

      <Footer/>
    </div>
  );
}


interface ITitleProps { 
  level?: 1 | 2 | 3,
  mode?: 'light' | 'dark' | 'auto';
}
const Title = ({level, mode, children}: React.PropsWithChildren<ITitleProps>) => {

  if (!mode) {
    mode = 'light'
  }

  let className = 'text-slate-900'

  if (mode === 'dark') {
    className += 'text-neutral-100'
  }
  
  if (level === 1) {
    return <h1 className={className}>
      {children}
    </h1>
  }

  if (level === 2) {
    return <h2 className={className}>
      {children}
    </h2>
  }

  if (level === 3) {
    return <h3 className={className}>
      {children}
    </h3>
  }

  return <h1 className={className}>
    {children}
  </h1>
}


function Header() {
  return (<>
    <header className="
        p-3
        flex
        items-center
        shadow-lg

        z-50
        "
      >
        <div className="flex-1">
          <Image
            alt="sedemat zamora logo"
            src={'/images/sedemat_dark_logo.png'}
            width={100}
            height={100}
          />
        </div>

        <div className="hidden sm:flex gap-3 text-blue-900 ">

          <Link href={'/'} className="font-bold">Inicio</Link>
          <Link href={'/about'}>¿Quiénes Somos?</Link>
          <Link href={'/guides'}>Guía de Tramites</Link>
          <Link href={'/bills'}>Ordenanzas</Link>

        </div>

        <div className="flex-1 flex justify-end sm:hidden">
          <AiOutlineMenu 
            className="m-2"
            size={'2rem'}
          />
        </div>
        
      </header>
  </>)
}

const Main: React.FC = () => {
  return (
    <main className="grow-[1]">
      <Banner/>

      <div className="px-10 max-w-[800px] m-auto">
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

  const card = (
    <Card>
      <div className="p-5">
        <p className="pb-5">Patentes de Vehículos y Motos (Trimestres)</p>
        <div className="text-right">
          <Link href={'/'}>Leer más</Link>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="mb-16">

      <SectionHeader title="Guías" viewMoreLink="/guides"/>
      <div className="flex flex-col gap-5">
        {card}

        {card}

        {card}
      </div>
    </div>
  )
}

const BillsSection: React.FC = () => {
  

  const card = (
    <Card className="">
        <CardHeader>
          <CardTitle>Guía de trámites y servicio</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter className="flex justify-end">
          
          <Link href={'/'}>Leer más</Link>
        </CardFooter>
      </Card>
  )
  return (

    <div className="mb-16">
       <SectionHeader title="Ordenanzas" viewMoreLink="/bills"/>

      <div className="flex flex-col gap-5">
        {card}

        {card}

        {card}
      </div>
    </div>
  )
}

const NewsSection: React.FC = () => {

  const data = [
    {
      title: 'Noticia #1',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: '/images/news.jpg'
    },
    {
      title: 'Noticia #2',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: '/images/news.jpg'
    },
    {
      title: 'Noticia #3',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: '/images/news.jpg'
    }
  ]


  return (
    <div className="mb-16">
      <SectionHeader title="Noticias" viewMoreLink="/news"/>

      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5">
        {data.map( (doc, idx) => {

          let className = ''

          if (idx === 0) {
            className = 'lg:row-span-2'
          } else if (idx === 2) {
            className = 'lg:col-start-2 lg:row-start-2'
          }

          return <NewsCard 
            key={String(idx)}
            title={doc.title} 
            description={doc.description}
            imageSrc={doc.imageSrc}
            link="/news"

            className={className}
          />
        })}
      </div>

    </div>
  )
}

interface NewsCardProps {
  title: string,
  description: string,
  imageSrc: string,
  link: string,

  className?: string
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  imageSrc,
  link,

  className
}) => {
  return (
  
  <Card className={className ?? ''}>
    <div>
      <CardHeader>
        <div className="overflow-hidden rounded-md bg-red-500 ">


          <Image
            src={imageSrc}
            alt={`Photo by Douglas Socorro`}
            className="aspect-[4/3] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link ?? '/news'}>Leer más</Link>
      </CardFooter>
      
      
    </div>
  </Card>)
}

const Footer: React.FC<{className?: string}> = (props) => {

  const className = `
    bg-neutral-800

    p-5
    text-neutral-100

    flex

    justify-center
    items-center
  `
  return (<>
    <footer 

      {...props}
    
      className={props.className + ' ' + className}
      >

      <div className="
        py-32
        text-center

        max-w-[60%]
        flex
        flex-col
        items-center
        justify-center

        gap-16

        lg:flex-row
      ">
        <div className="flex flex-col gap-5 items-center">
          <Image
            alt="logo del municipio zamora"
            src={'/images/alcaldia_zamora_logo.png'}
            width={150}
            height={150}
          />

          <p>
            En nuestra alcaldía, la transparencia es nuestra prioridad. Accede a la información pública de manera clara y accesible
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-3xl font-bold">
            Contacto
          </h1>
          
          <div>
            <h2 className="text-2xl font-bold">
              Horario
            </h2>
            <p>
              Lunes a viernes 8:00 a.m. a 3:00 p.m.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Dirección
            </h2>
            <div className="flex">
              <div className="flex items-center">
                <MdLocationOn size={'30px'}/>
              </div>
              <a href="https://maps.app.goo.gl/ksm4uTyyraLt9sD86" target="_blank" className="flex items-center"> Oficina Principal: Delicias 2, Alcaldía del Municipio Zamora, plnata baja.</a>
            </div>
          </div>

          <h2 className="flex gap-1 items-center text-2xl font-bold">
            <AiOutlineWhatsApp size={'30px'}/>

            <a href='https://wa.me/+584126743853' target="_blank">Whatsapp: +58 412-6743853</a>
          </h2>

        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-center">
            Siguenos en nuestras redes
          </h1>

          <div className="flex gap-5 justify-center">
            
            <a href={SEDEMAT_ZAMORA_FB} target="_blank">
              <BsFacebook size={'1.5rem'}/>
            </a>
            <a href={SEDEMAT_ZAMORA_IG} target="_blank"><BsInstagram  size={'1.5rem'}/></a>
          </div>

        </div>
      </div>

    </footer>
  </>)
}


const SEDEMAT_ZAMORA_IG = 'https://www.instagram.com/sedemat.zamora/'
const SEDEMAT_ZAMORA_FB = 'https://www.facebook.com/sedemat.zamora.5'