import Image from 'next/image'
import { Footer } from "@/components/Footer"
import GuideSectionCard from "@/components/GuideSectionCard"
import Header from "@/components/Header"
import { getGuidesList } from "@/lib/guides"

function Guides() {

  const guidesList = getGuidesList()

  const cards = guidesList.map((g, idx) => {
    return (<GuideSectionCard {...g} key={idx}/>)
  })

  return (
    <>
      <Header/>

      <div className=''>
        <figure className='relative min-h-[200px] md:min-h-[500px] '>
          <Image
            className=''

            src='/images/guides_banner.png'
            fill={true}
            alt="guides banner"
            objectFit='cover' 

          />
        </figure>
      </div>

      <main className="px-10 py-16 max-w-[900px] m-auto">

        <div className="pb-10">
            <h1 className="text-3xl font-bold">Guías de tramites</h1>
        </div>

        <div className="flex gap-5 flex-col">
          {cards} 
        </div>

      </main>

      <Footer/>
    </>
  )
}

export default Guides