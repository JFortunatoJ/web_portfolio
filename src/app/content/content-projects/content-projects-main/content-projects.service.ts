import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentProjectsService {

  constructor() { }

  // tslint:disable-next-line:typedef
  getProfessionalProjects(){
    return ['Road Star', 'Herois da Pandemia', 'Joy & Toy'];
  }

  // tslint:disable-next-line:typedef
  getPersonalProjects(){
    return ['Bounce Light', 'Alpha Core'];
  }
}
