import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

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

export default Header;