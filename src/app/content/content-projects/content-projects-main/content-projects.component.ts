import { Component, OnInit } from '@angular/core';
import { ContentProjectsService} from './content-projects.service';
import { Observable} from 'rxjs';
import {Project} from '../content-projects-project/project';

@Component({
  selector: 'app-content-projects',
  templateUrl: './content-projects.component.html',
  styleUrls: ['./content-projects.component.css']
})
export class ContentProjectsComponent implements OnInit {

  public professionalProjects: Project[];
  public personalProjects: Project[];

  constructor(private contentProjectsService: ContentProjectsService) {
  }

  ngOnInit(): void {
    this.contentProjectsService.getProfessionalProjects().subscribe(projects => {
      this.professionalProjects = [];
      projects.forEach(res => {
        this.professionalProjects.push(res.payload.val());
      });
    });

    this.contentProjectsService.getPersonalProjects().subscribe(projects => {
      this.personalProjects = [];
      projects.forEach(res => {
        this.personalProjects.push(res.payload.val());
      });
    });
  }
}
