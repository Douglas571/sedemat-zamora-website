import { parse, stringify } from 'yaml'

import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

interface GuideDocument {
  title: string;
  publishedAt: string;
  summary: string;
  filename: string;
}

/**
 * Reads and parses a YAML file from the specified path
 * @param filePath Path to the YAML file (relative to project root)
 * @returns Promise with array of parsed YAML content
 */
export function parseYamlFile(filePath: string): GuideDocument[] {
  try {
    // Construct absolute path (adjust if your files are in a different location)
    const absolutePath = path.join(process.cwd(), filePath);
    
    // Read file contents
    const fileContents = fs.readFileSync(absolutePath, 'utf-8');
    
    // Parse YAML
    const parsedData = yaml.parse(fileContents) as GuideDocument[];
    
    // Optional: Validate the structure if needed
    if (!Array.isArray(parsedData)) {
      throw new Error('YAML file should contain an array of objects');
    }
    
    return parsedData;
  } catch (error) {
    console.error(`Error parsing YAML file at ${filePath}:`, error);
    throw error;
  }
}

export function getGuidesList(): GuideDocument[] {
  try {
    return parseYamlFile('src/content/guides/index.yaml')
  }
}