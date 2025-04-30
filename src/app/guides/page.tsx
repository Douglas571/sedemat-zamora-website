import ExportedImage from "next-image-export-optimizer";
import { Footer } from "@/components/Footer"
import GuideSectionCard from "@/components/GuideSectionCard"
import Header from "@/components/Header"
import { getGuidesList } from "@/lib/guides"

import { Separator } from "@/components/ui/separator"

function Guides() {

  const guidesList = getGuidesList()

  const cards = guidesList.filter( g => !g.isPinned ).map((g, idx) => {
    return (<GuideSectionCard {...g} key={idx}/>)
  })

  const pinnedCards = guidesList.filter( g => g.isPinned ).map((g, idx) => {
    return (<GuideSectionCard {...g} showPinnedStyles key={idx}/>)
  })

  return (
    <>
      <Header/>

      <div className=''>
        <figure className='relative min-h-[200px] md:min-h-[500px] '>
          <ExportedImage
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

        <div className="pb-10">
            <h2 className="text-2xl font-bold">📌 Destacadas</h2>
        </div>

        <div className="flex gap-5 flex-col">
          {pinnedCards} 
        </div>

        
        <Separator className="my-7 mb-10"/>               

        <div className="flex gap-5 flex-col">
          {cards} 
        </div>

      </main>

      <Footer/>
    </>
  )
}

export default Guides