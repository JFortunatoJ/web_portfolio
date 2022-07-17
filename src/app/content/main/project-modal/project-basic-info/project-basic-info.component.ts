import {Component, Input} from '@angular/core';
import {Project} from 'src/app/content/shared/project';

@Component({
  selector: 'app-info',
  templateUrl: './project-basic-info.component.html',
  styleUrls: ['./project-basic-info.component.css']
})
export class ProjectBasicInfoComponent {

  @Input()
  public project: Project;

  constructor() {
  }
}
