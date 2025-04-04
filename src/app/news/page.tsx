import { getNewsList } from "./util" 

async function NewsIndex() {

  const newsList = await getNewsList()

  return (
    <>    
      <h1>Noticias</h1>

      <div>
        {newsList.map( (n, idx) => <p key={idx}>{n.slug}</p> )}
      </div>
    </>

  )
}



export default NewsIndex