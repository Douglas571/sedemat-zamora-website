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
            height={150} />

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
                <MdLocationOn size={'30px'} />
              </div>
              <a href="https://maps.app.goo.gl/ksm4uTyyraLt9sD86" target="_blank" className="flex items-center"> Oficina Principal: Delicias 2, Alcaldía del Municipio Zamora, plnata baja.</a>
            </div>
          </div>

          <h2 className="flex gap-1 items-center text-2xl font-bold">
            <AiOutlineWhatsApp size={'30px'} />

            <a href='https://wa.me/+584126743853' target="_blank">Whatsapp: +58 412-6743853</a>
          </h2>

        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-center">
            Siguenos en nuestras redes
          </h1>

          <div className="flex gap-5 justify-center">

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
