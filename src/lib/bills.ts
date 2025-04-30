import parseYamlFile from "./yaml";

interface BillDocument {
  title: string;
  publishedAt: string;
  summary: string;
  url: string;

  isPinned?: boolean
}

export function getBillsList(): BillDocument[] {
  try {
    return (parseYamlFile('src/app/content/bills/index.yaml') as BillDocument[]).sort((a, b) => {
      // sort by publish at date 
      // Convert publishedAt strings to Date objects for comparison
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      
      // Sort from newest to oldest (descending order)
      return dateB.getTime() - dateA.getTime();
    });
    
  } catch (error) {
    console.log(error)
    return []
  }
}