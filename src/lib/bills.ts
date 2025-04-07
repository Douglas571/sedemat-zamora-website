import parseYamlFile from "./yaml";

interface BillDocument {
  title: string;
  publishedAt: string;
  summary: string;
  url: string;
}

export function getBillsList(): BillDocument[] {
  try {
    return parseYamlFile('src/app/content/bills/index.yaml') as BillDocument[];
    
  } catch (error) {
    console.log(error)
    return []
  }
}