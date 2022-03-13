import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Project} from '../../shared/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectViewService {

  private projectView = new Subject<Project>();
  projectView$ = this.projectView.asObservable();

  constructor() {
  }

  openProject(project: Project) {
    this.projectView.next(project);
  }
}
