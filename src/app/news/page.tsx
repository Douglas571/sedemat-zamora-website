import { getNewsList } from "./util" 
import { Footer } from "@/components/Footer"
import Header from "@/components/Header"
import NewsSectionCard from "@/components/NewsSectionCard"

function NewsList() {

  const newsList = getNewsList()

  return (
    <>
      <Header/>

      <main className="px-10 py-16 max-w-[900px] m-auto min-h-[100vh]">

        <div className="pb-10">
            <h1 className="text-3xl font-bold">Noticias</h1>
        </div>

        <div className="flex flex-col gap-5 ">
          {newsList.map( (n, idx) =>
            <NewsSectionCard {...n} {...n.metadata} key={idx}/>
          )}
        </div>

      </main>

      <Footer/>
    </>
  )
}

export default NewsList