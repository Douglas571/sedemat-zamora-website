import { SEDEMAT_ZAMORA_FB, SEDEMAT_ZAMORA_IG } from "@/constants";
import Image from "next/image";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export const Footer: React.FC<{ className?: string; }> = (props) => {

  const className = `
    bg-neutral-800

    p-5
    text-neutral-100

    flex

    justify-center
    items-center
  `;
  return (<>
    <footer

      {...props}

      className={props.className + ' ' + className}
    >

      <div className="
        max-w-[800px]
        py-10
        
        

        
        flex
        flex-col
        items-center
        justify-center

        gap-10

        text-center
        md:text-left
        md:flex-row


      ">
        <div className="flex flex-1 flex-col gap-5 self-start">
          <figure className="min-w-[100%] flex justify-center md:justify-start flex-1 border-b-2 pb-8 ">
            <Image
            

            alt="logo del municipio zamora"
            src={'/images/alcaldia_zamora_logo.png'}
            width={150}
            height={150} />
          </figure>

          <p>
            En nuestra alcaldía, la transparencia es nuestra prioridad. Accede a la información pública de manera clara y accesible.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-5 ">
          <h1 className="text-2xl font-bold">
            Contacto
          </h1>

          <div>
            <h2 className="text-xl font-bold">
              Horario
            </h2>
            <p>
              Lunes a viernes 8:00 a.m. a 3:00 p.m.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold pb-2">
              Dirección
            </h2>
            <div className="flex">
              <div className="flex">
                <MdLocationOn size={'30px'} />
              </div>
              <a href="https://maps.app.goo.gl/ksm4uTyyraLt9sD86" target="_blank" className="flex items-center"> Oficina Principal: Delicias II, Planta Baja, Sede Alí Primera - Alcaldía de Zamora.</a>
            </div>
          </div>

          <h2 className="flex gap-1 items-top text-xl font-bold">
            <AiOutlineWhatsApp size={'30px'} />

            <div className="flex-1">
              <a href='https://wa.me/+584126743853' target="_blank">+58 412-6743853</a>
            </div>
          </h2>

        </div>

        <div className="flex flex-1 flex-col gap-5 self-center md:self-start text-center">
          <h1 className="text-2xl font-bold">
            Siguenos en Nuestras Redes
          </h1>

          <div className="flex gap-5 self-center md:self-center">

            <a href={SEDEMAT_ZAMORA_FB} target="_blank">
              <BsFacebook size={'1.5rem'} />
            </a>
            <a href={SEDEMAT_ZAMORA_IG} target="_blank"><BsInstagram size={'1.5rem'} /></a>
          </div>

        </div>
      </div>

    </footer>
  </>);
};
