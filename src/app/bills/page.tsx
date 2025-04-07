import BillSectionCard from "@/components/BillSectionCard";
import { Footer } from "@/components/Footer"
import Header from "@/components/Header"
import { getBillsList } from "@/lib/bills";

function Bills() {

  const billsList = getBillsList()

  const cards = billsList.map((bill, idx) => {
    return (<BillSectionCard {...bill} key={idx} />)
  })
  
  return (
    <>
      <Header/>

      <main className="px-10 py-16 max-w-[900px] m-auto">

        <div className="pb-10">
            <h1 className="text-3xl font-bold">Ordenanzas</h1>
        </div>

        <div className="flex gap-5 flex-col">
          {cards} 
        </div>

      </main>

      <Footer/>
    </>
  )
}

export default Bills