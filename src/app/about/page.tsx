import { Footer } from "@/components/Footer"
import Header from "@/components/Header"

function About() {
  return (
    <>
      <Header/>

      <main className="px-10 py-16 max-w-[900px] m-auto min-h-[100vh]">

        <div className="pb-10">
            <h1 className="text-3xl font-bold">Sobre Nosotros</h1>
        </div>

        {/* <div className="flex gap-5 flex-col">
          {cards} 
        </div> */}

      </main>

      <Footer/>
    </>
  )
}

export default About