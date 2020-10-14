import {Component, OnDestroy, OnInit} from '@angular/core';
import { ContentProjectsService} from './content-projects.service';
import {Subscription} from 'rxjs';
import {Project} from '../../../shared/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy{

  public professionalProjects: Project[];
  public personalProjects: Project[];

  private proProjectsSubs: Subscription;
  private perProjectsSubs: Subscription;

  constructor(private contentProjectsService: ContentProjectsService) {
  }

  ngOnInit(): void {
    this.proProjectsSubs = this.contentProjectsService.getAllProfessionalProjects().subscribe(projects => {
      this.professionalProjects = [];
      projects.forEach(res => {
        this.professionalProjects.push(res.payload.val());
      });
    });

    this.perProjectsSubs = this.contentProjectsService.getAllPersonalProjects().subscribe(projects => {
      this.personalProjects = [];
      projects.forEach(res => {
        this.personalProjects.push(res.payload.val());
      });
    });
  }

  ngOnDestroy(): void {
    this.proProjectsSubs.unsubscribe();
    this.perProjectsSubs.unsubscribe();
  }
}
