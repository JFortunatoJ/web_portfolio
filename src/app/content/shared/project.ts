import {AccessOption} from './accessOption';

export class Project{
  name: string;
  description: string;
  fullDescription: string;
  thumbUrl: string;
  videoUrl: string;
  tags: string[];
  contributions: string[];
  categories: string[];
  platforms: string[];
  engine: string;
  languages: string[];
  access: AccessOption[];
}
