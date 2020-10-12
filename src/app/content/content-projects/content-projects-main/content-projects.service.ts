import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Project} from '../content-projects-project/project';

@Injectable({
  providedIn: 'root'
})
export class ContentProjectsService {

  constructor(private db: AngularFireDatabase) { }

  // tslint:disable-next-line:typedef
  getProfessionalProjects(){
    return this.db.list<Project>('ProfessionalProjects').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getPersonalProjects(){
    return this.db.list<Project>('PersonalProjects').snapshotChanges();
  }
}
