import { Component, OnInit } from '@angular/core';
import {ContentProjectsService} from './content-projects.service';

@Component({
  selector: 'app-content-projects',
  templateUrl: './content-projects.component.html',
  styleUrls: ['./content-projects.component.css']
})
export class ContentProjectsComponent implements OnInit {

  professionalProjects: string[];
  personalProjects: string[];

  constructor(private contentProjectsService: ContentProjectsService) {
    this.professionalProjects = contentProjectsService.getProfessionalProjects();
    this.personalProjects = contentProjectsService.getPersonalProjects();
  }

  ngOnInit(): void {
  }
}
