import Image from 'next/image'

import { Footer } from "@/components/Footer"
import Header from "@/components/Header"

function About() {
  return (
    <>
      <Header/>

      <main className="px-10 py-16 max-w-[900px] m-auto min-h-[100vh] flex flex-col">

        <div className="pb-10">
            <h1 className="text-3xl font-bold">¿Quiénes Somos?</h1>
        </div>

        <div className="prose ">
          <p>El Servicio Desconcentrado Municipal de Administración Tributaria del Municipio Zamora, conocido como el SEDEMAT Zamora, es el organismo que ofrece la base de sustentabilidad para el desarrollo del estado. Tiene una responsabilidad vital que permite lograr los objetivos de financiamiento de 9 de cada 10 actividades de gestión de la Alcaldía de Zamora en beneficio de la región.</p>

          <h2>Misión</h2>
          <p>Dirigir, gestionar, fiscalizar el sistema tributario municipal que por mandato constitucional y legal le corresponde al municipio Zamora del estado Falcón.</p>

          <h2>Visión</h2>
          <p>Ser una institución modelo en organización, eficiencia y efectividad, moderna, acorde con el desarrollo socio económico del país, que fomente la cultura tributaria y garantice el cumplimiento de las obligaciones y deberes de los contribuyentes del municipio.</p>

          <h2>Intendente: Manolo Ramones</h2>
          <Image
            className='float-right px-8'

            src={'/images/intendente_pfp.jpg'}
            width={300}
            height={300}
            alt='Manolo Ramones, Intendente Municipal'
          />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
        </div>

        <div>
          <div className='prose py-5'>
            <h2>Organigrama Estructural Del Servicio Desconcentrado Municipal De Administración Tributaria del Municipio Zamora (SEDEMAT Zamora)</h2>
          </div>
          <figure className='relative min-h-[500px] md:min-h-[800px]'>
            <Image
              className='object-contain'
              src={'/images/organigrama.png'}
              fill={true}
              alt={'Organigrama el SEDEMAT Zamora'}
            />
          </figure>
        </div>

      </main>

      <Footer/>
    </>
  )
}

export default About