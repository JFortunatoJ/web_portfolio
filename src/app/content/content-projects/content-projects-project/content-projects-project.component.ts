import {Component, Input, OnInit} from '@angular/core';
import {Project} from './project';

@Component({
  selector: 'app-content-projects-project',
  templateUrl: './content-projects-project.component.html',
  styleUrls: ['./content-projects-project.component.css']
})
export class ContentProjectsProjectComponent implements OnInit {

  @Input()
  public project: Project;

  constructor() {
  }

  ngOnInit(): void {
  }
}
