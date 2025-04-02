async function Article({
  params
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  return (
    <>
      <h1>Noticias</h1>
      <p>slug: {slug}</p>
    </>
  )
}

export default Article