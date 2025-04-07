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