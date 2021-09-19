import {Component, Input} from '@angular/core';
import {Project} from '../../shared/project';

@Component({
  selector: 'app-info',
  templateUrl: './project-basic-info.component.html',
  styleUrls: ['./project-basic-info.component.css']
})
export class ProjectBasicInfoComponent {

  // tslint:disable-next-line:no-input-rename
  @Input()
  public project: Project;

  constructor() {
  }
}
