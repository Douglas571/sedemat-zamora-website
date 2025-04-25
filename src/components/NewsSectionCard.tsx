import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card"
import Image from "next/image"

interface NewsSectionCardProps {
  title: string,
  publishedAt: string,
  cover: string,
  slug: string,

  className?: string
}

const NewsSectionCard: React.FC<NewsSectionCardProps> = ({
  title,
  publishedAt,
  cover,
  slug,

  className
}) => {

  return (
  
  <Card className={className ?? ''}>
    <div className={'flex flex-col p-6 gap-5 md:flex-row '}>
      <header>
        <div className="overflow-hidden rounded-md">


          <figure className="relative aspect-[4/3] min-w-[300px]">
            <Image
                src={cover}
                alt={`Photo by Douglas Socorro`}
                className=""
                fill={true}
                objectFit="cover"

              />
          </figure>
        </div>
      </header>
      <div className="flex flex-col md:justify-between">
        <CardContent>
          <h1 className="text-3xl">{title}</h1>
          <CardDescription>{publishedAt}</CardDescription>
        </CardContent>
        <CardFooter className="">
          <Link href={`/news/${slug}`} className="text-blue-500 underline">Leer más</Link>
        </CardFooter>
      </div>
      
      
    </div>
  </Card>)
}

export default NewsSectionCard