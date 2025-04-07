"use client"

import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  // Helper function to determine if link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <header
        className="
        p-7
        px-16
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

        <div className="hidden sm:flex gap-6 text-blue-900 ">
          <Link 
            href={'/'} 
            className={isActive('/') ? "font-bold" : ""}
          >
            Inicio
          </Link>
          <Link 
            href={'/guides'} 
            className={isActive('/guides') ? "font-bold" : ""}
          >
            Guía de Tramites
          </Link>
          <Link 
            href={'/bills'} 
            className={isActive('/bills') ? "font-bold" : ""}
          >
            Ordenanzas
          </Link>
          <Link 
            href={'/news'} 
            className={isActive('/news') ? "font-bold" : ""}
          >
            Noticias
          </Link>
          
          <Link 
            href={'/about'} 
            className={isActive('/about') ? "font-bold" : ""}
          >
            ¿Quiénes Somos?
          </Link>
        </div>

        <div className="flex-1 flex justify-end sm:hidden">
          <AiOutlineMenu className="m-2" size={'2rem'} />
        </div>
      </header>
    </>
  );
}

export default Header;