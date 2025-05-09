"use client"

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to determine if link is active
  const isActive = (path: string) => {

    // console.log('pathname: ', pathname, ' - path: ', path);

    if (pathname.startsWith(path) && path !== '/') {
      return true;

    } else if (pathname === path && path === '/') {
      return true;

    }

    return false
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="
        p-7
        md:px-16
        flex
        items-center
        shadow-lg
        z-50
        relative
        "
      >
        <div className="flex-1">
          <Link href={'/'}>
            <ExportedImage
              alt="sedemat zamora logo"
              src={'/images/sedemat_dark_logo.png'}
              width={100}
              height={100}
            />
          </Link>
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
            Guías de Tramites
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
          <button onClick={toggleMenu} className="m-2">
            {isMenuOpen ? (
              <AiOutlineClose size={'2rem'} />
            ) : (
              <AiOutlineMenu size={'2rem'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="
            sm:hidden
            absolute
            top-full
            left-0
            right-0
            bg-white
            shadow-lg
            p-4
            flex
            flex-col
            gap-4
            z-50
          ">
            <Link 
              href={'/'} 
              className={isActive('/') ? "font-bold" : ""}
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link 
              href={'/guides'} 
              className={isActive('/guides') ? "font-bold" : ""}
              onClick={closeMenu}
            >
              Guías de Tramites
            </Link>
            <Link 
              href={'/bills'} 
              className={isActive('/bills') ? "font-bold" : ""}
              onClick={closeMenu}
            >
              Ordenanzas
            </Link>
            <Link 
              href={'/news'} 
              className={isActive('/news') ? "font-bold" : ""}
              onClick={closeMenu}
            >
              Noticias
            </Link>
            <Link 
              href={'/about'} 
              className={isActive('/about') ? "font-bold" : ""}
              onClick={closeMenu}
            >
              ¿Quiénes Somos?
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;