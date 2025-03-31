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

        <div className="flex gap-3 text-blue-900">

          <Link href={'/'} className="font-bold">Inicio</Link>
          <Link href={'/about'}>¿Quiénes Somos?</Link>
          <Link href={'/guides'}>Guía de Tramites</Link>
          <Link href={'/bills'}>Ordenanzas</Link>

        </div>

        <div className="flex-1 flex justify-end">
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
      <div className="bg-blue-600 flex justify-center items-center">
        <div className="text-neutral-100 text-center">
          <h1 className="text-3xl font-bold">
          Servicio Desconcentrado Municipal de
            Administración Tributaria
          </h1>

          <h2 className="text-2xl font-bold">
            Oficina Principal: Delicias 2, Alcaldía del Municipio Zamora, plnata baja.
          </h2>
        </div>

        
      </div>

      <Card>
        <span>Guía de trámites y servicio</span>
        <span>Ver más</span>
        
        <div>
          <p>Patentes de Vehículos y Motos (Trimestres)</p>
          <span>Leer más</span>
        </div>
      </Card>

      <BillsSection/>

      

      <div>
        <span>Ordenanzas</span>
        <span>Ver más</span>
        
        <div>
          <p></p>
          <span>Leer más</span>
        </div>
      </div>
    </main>
  )

}

const BillsSection: React.FC = () => {
  return (

    <div className="flex gap-3">
      <Card className="w-[350px]">
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

      <Card className="w-[350px]">
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

      <Card className="w-[350px]">
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
    </div>
  )
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
        max-w-[60%]
        flex
        flex-col
        items-center
        justify-center

        gap-16

        lg:flex-row
      ">
        <div className="flex flex-col items-center">
          <Image
            alt="logo del municipio zamora"
            src={'/images/alcaldia_zamora_logo.png'}
            width={100}
            height={100}
          />

          <p>
            En nuestra alcaldía, la transparencia es nuestra prioridad. Accede a la información pública de manera clara y accesible
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">
            Contacto
          </h1>
          
          <h2 className="text-2xl font-bold">
            Horario
          </h2>
          <p>
            Lunes a viernes 8:00 a.m. a 3:00 p.m.
          </p>

          <h2 className="text-2xl font-bold">
            Dirección
          </h2>
          <p className="flex">
            <div className="flex items-center">
              <MdLocationOn size={'30px'}/>
            </div>
            <a href="https://maps.app.goo.gl/ksm4uTyyraLt9sD86" target="_blank" className="flex items-center"> Oficina Principal: Delicias 2, Alcaldía del Municipio Zamora, plnata baja.</a>
          </p>

          <h2 className="flex gap-1 items-center text-2xl font-bold">
            <AiOutlineWhatsApp size={'30px'}/>

            <a href='https://wa.me/+584126743853' target="_blank">Whatsapp: +58 412-6743853</a>
          </h2>

        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">
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