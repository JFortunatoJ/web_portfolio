import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Project} from '../../shared/project';
import {ProjectViewService} from '../index/project-view.service';
import {ContentProjectsService} from '../projects/base/content-projects.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

  public project: Project;
  public isVisible: boolean = false;

  private getProject: Subscription;

  constructor(private projectViewService: ProjectViewService) {
    this.getProject = projectViewService.projectView$.subscribe(
      project => {
        this.showProject(project);
      }
    )
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngOnDestroy(): void {
    this.getProject.unsubscribe();
  }

  showProject(project: Project) {
    this.project = project;
    this.setVisibility(true);
  }

  public setVisibility(status: boolean): void {
    this.isVisible = status;
  }
}
