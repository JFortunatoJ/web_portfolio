import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Project} from '../shared/project';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {ContentProjectsService} from '../main/projects/base/content-projects.service';

@Component({
  selector: 'app-project-view-base',
  templateUrl: './project-view-base.component.html',
  styleUrls: ['./project-view-base.component.css']
})
export class ProjectViewBaseComponent implements OnInit, OnDestroy {

  public project: Project;

  private loadData: Subscription;
  projectId: number;

  constructor(private route: ActivatedRoute, private contentProjectsService: ContentProjectsService) {
    this.loadData = this.route.firstChild.data.subscribe(params => {
      this.projectId = params.id;
    });
  }

  ngOnInit(): void {
    this.loadData = this.contentProjectsService.getProfessionalProject(this.projectId).subscribe(project => {
      this.project =  project.payload.val();
    });
  }

  ngOnDestroy(): void {
    this.loadData.unsubscribe();
  }
}
