import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Project} from '../../../shared/project';

@Injectable({
  providedIn: 'root'
})
export class ContentProjectsService {

  constructor(private db: AngularFireDatabase) { }

  // tslint:disable-next-line:typedef
  getAllProfessionalProjects(){
    return this.db.list<Project>('MainScreenInfo/ProfessionalProjects').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllPersonalProjects(){
    return this.db.list<Project>('MainScreenInfo/PersonalProjects').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getProfessionalProject(id: number){
    return this.db.object<Project>('MainScreenInfo/ProfessionalProjects/' + id).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getPersonalProject(id: number){
    return this.db.object<Project>('MainScreenInfo/PersonalProjects/' + id).snapshotChanges();
  }
}
