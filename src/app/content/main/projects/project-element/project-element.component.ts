import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../../../shared/project';

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.css']
})
export class ProjectElementComponent implements OnInit {

  @Input()
  public project: Project;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
