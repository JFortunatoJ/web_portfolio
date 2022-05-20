import {Injectable} from '@angular/core';
import {Project} from '../../../shared/project';

import projectsDataFile from 'src/assets/projectsData.json';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentProjectsService {

  private data: {
    MainScreenInfo: {
      ProfessionalProjects: Project[];
      PersonalProjects: Project[];
    }
  };

  constructor(/*private db: AngularFireDatabase*/) {
    this.data = projectsDataFile;
  }

  // tslint:disable-next-line:typedef
  getAllProfessionalProjects() {
    return new Observable<Project[]>((observer) => {
      observer.next(this.data.MainScreenInfo.ProfessionalProjects);
      observer.complete();
    });
    // return this.db.list<Project>('MainScreenInfo/ProfessionalProjects').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllPersonalProjects() {
    return new Observable<Project[]>((observer) => {
      observer.next(this.data.MainScreenInfo.PersonalProjects);
      observer.complete();
    });
    // return this.db.list<Project>('MainScreenInfo/PersonalProjects').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getProfessionalProject(id: string) {
    return new Observable<Project>((observer) => {
      observer.next(this.data.MainScreenInfo.ProfessionalProjects.find(p => p.thumbUrl === id));
      observer.complete();
    });
    // return this.db.object<Project>('MainScreenInfo/ProfessionalProjects/' + id).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getPersonalProject(id: string) {
    return new Observable<Project>((observer) => {
      observer.next(this.data.MainScreenInfo.PersonalProjects.find(p => p.thumbUrl === id));
      observer.complete();
    });
    // return this.db.object<Project>('MainScreenInfo/PersonalProjects/' + id).snapshotChanges();
  }
}
