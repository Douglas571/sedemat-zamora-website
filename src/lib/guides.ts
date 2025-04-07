import parseYamlFile from "./yaml";

interface GuideDocument {
  title: string;
  publishedAt: string;
  summary: string;
  url: string;
}

export function getGuidesList(): GuideDocument[] {
  try {
    return parseYamlFile('src/app/content/guides/index.yaml') as GuideDocument[];
    
  } catch (error) {
    console.log(error)
    return []
  }
}