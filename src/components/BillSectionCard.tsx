import React from 'react' 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface BillSectionCardProps {
  title: string,
  publishedAt: string,
  url: string
}

const BillSectionCard: React.FC<BillSectionCardProps> = (params) => {
  return (<Card>
    <CardHeader>
      <CardTitle>{params.title}</CardTitle>
      <CardDescription>{params.publishedAt}</CardDescription>
    </CardHeader>
    <CardContent className="text-right">
      <a 
        href={params.url} 
        className="text-blue-500 underline"
        
        target="_blank"
        rel="noopener noreferrer"  

      >Leer más</a>
    </CardContent>
  </Card>)
}

export default BillSectionCard