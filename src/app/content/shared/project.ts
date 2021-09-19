import {AccessOption} from './accessOption';

export class Project{
  name: string;
  description: string;
  thumbUrl: string;
  tags: string[];
  contributions: string[];
  categories: string[];
  platforms: string[];
  engine: string;
  languages: string[];
  access: AccessOption[];
}
