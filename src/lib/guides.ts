import parseYamlFile from "./yaml";

interface GuideDocument {
  title: string;
  publishedAt: string;
  summary: string;
  url: string;
}

export function getGuidesList(): GuideDocument[] {
  try {
    return (parseYamlFile('src/app/content/guides/index.yaml') as GuideDocument[]).sort((a, b) => {
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