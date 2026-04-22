import Link from "next/link"
import { Card, CardContent, CardFooter } from "./ui/card"
import ExportedImage from "next-image-export-optimizer";
import React from "react"

interface TaxSectionCardProps {
  title: string
  description: string
  href: string
  cover?: string
  children?: React.ReactNode
  className?: string
}

const TaxSectionCard: React.FC<TaxSectionCardProps> = ({
  title,
  description,
  href,
  cover,
  children,
  className
}) => {
  return (
    <Card className={`hover:border-blue-500 transition-colors ${className ?? ''}`}>
      <div className={`flex flex-col p-6 gap-6 ${cover ? 'md:flex-row' : ''}`}>
        {cover && (
          <header className="md:w-1/3">
            <div className="overflow-hidden rounded-md border border-slate-100">
              <figure className="relative aspect-[16/9] w-full">
                <ExportedImage
                  src={cover}
                  alt={title}
                  fill={true}
                  className="object-cover"
                />
              </figure>
            </div>
          </header>
        )}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">{title}</h1>
            <p className="text-slate-600 mb-4 line-clamp-3">
              {description}
            </p>
            {children}
          </div>
          <div className="mt-6">
            <Link href={href} className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4">
              Ver más información
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TaxSectionCard
