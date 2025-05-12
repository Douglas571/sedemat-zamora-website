import ExportedImage from "next-image-export-optimizer";

import { Footer } from "@/components/Footer"
import Header from "@/components/Header"

function About() {
  return (
    <>
      <Header/>

      <div className=''>
        <figure className='relative min-h-[200px] md:min-h-[500px] '>
          <ExportedImage
            className=''

            src='/images/main_banner_group.jpg'
            fill={true}
            alt="guides banner"
            objectFit='cover' 

          />
        </figure>
      </div>


      <main className="px-10 py-16 max-w-[900px] m-auto min-h-[100vh] flex flex-col">
        
        <div className="pb-10">
            <h1 className="text-3xl font-bold">¿Quiénes Somos?</h1>
        </div>

        <div className="prose ">
          <p>El <strong>Servicio Desconcentrado Municipal de Administración Tributaria del Municipio Zamora</strong>, conocido como el <strong>SEDEMAT Zamora</strong>, es el organismo que ofrece la base de sustentabilidad para el desarrollo del estado. Tiene una responsabilidad vital que permite lograr los objetivos de financiamiento de 9 de cada 10 actividades de gestión de la Alcaldía de Zamora en beneficio de la región.</p>

          <h2>Misión</h2>
          <p>Dirigir, gestionar, fiscalizar el sistema tributario municipal que por mandato constitucional y legal le corresponde al municipio Zamora del estado Falcón.</p>

          <h2>Visión</h2>
          <p>Ser una institución modelo en organización, eficiencia y efectividad, moderna, acorde con el desarrollo socio económico del país, que fomente la cultura tributaria y garantice el cumplimiento de las obligaciones y deberes de los contribuyentes del municipio.</p>

          <h2>Alcalde Del Municipio Zamora: Orlando Jesus Millán Martinez</h2>
          <ExportedImage
            className='float-right px-8'

            src={'/images/alcalde_pfp.jpg'}
            width={300}
            height={300}
            alt='Orlando Millán, Alcalde del Municipio Zamora'
          />
          <p><strong>Orlando Jes&uacute;s Mill&aacute;n Mart&iacute;nez</strong> es un destacado servidor p&uacute;blico zamorano con una larga trayectoria en la administraci&oacute;n municipal. Fue elegido por primera vez como alcalde en el per&iacute;odo 1995-2000, reelecto para 2000-2004, y nuevamente en 2021-2025, demostrando la confianza de sus coterr&aacute;neos en su liderazgo. Su formaci&oacute;n y valores, basados en la solidaridad y el trabajo comunitario, han guiado su gesti&oacute;n, enfrentando desaf&iacute;os pol&iacute;ticos con determinaci&oacute;n para mejorar la calidad de vida en Zamora.</p>

          <p>Durante sus mandatos, Mill&aacute;n Mart&iacute;nez ha logrado gestionar recursos clave para obras y proyectos municipales, superando obst&aacute;culos administrativos. Destacan sus pol&iacute;ticas sociales inclusivas, dirigidas a ni&ntilde;os, j&oacute;venes y adultos mayores, sin distinci&oacute;n de ideolog&iacute;a o estatus social. Su enfoque pr&aacute;ctico, bajo el lema <strong>&quot;Con hechos, no palabras&quot;</strong>, refleja su compromiso con soluciones tangibles para las necesidades de la comunidad.</p>

          <p>Convencido de la importancia de la unidad, Mill&aacute;n Mart&iacute;nez promueve la integraci&oacute;n de todos los sectores sociales para impulsar el desarrollo de Zamora. Su liderazgo, marcado por perseverancia y f&eacute; en la justicia divina, sigue siendo un pilar fundamental para el progreso del municipio, manteniendo su dedicaci&oacute;n al servicio p&uacute;blico con pasi&oacute;n y entrega.</p>
          
        </div>

        <div>
          <div className='prose py-5'>
            <h2>Organigrama Estructural Del Servicio Desconcentrado Municipal De Administración Tributaria del Municipio Zamora (SEDEMAT Zamora)</h2>
          </div>
          <figure className='relative min-h-[500px] md:min-h-[800px]'>
            <ExportedImage
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