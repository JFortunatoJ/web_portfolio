import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../../shared/project';
import {ProjectViewService} from '../../index/project-view.service';

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.css']
})
export class ProjectElementComponent implements OnInit {

  @Input()
  public project: Project;

  private projectName: any;

  constructor(private projectViewService: ProjectViewService) {
  }

  ngOnInit(): void {
    this.projectName = document.querySelectorAll('.project-name label');

    this.projectName.forEach(box => {
      box.style.fontSize = this.getFontSize(box.textContent.length);
    });
  }

  getFontSize(textLength): string {
    const baseSize = 27;
    const baseTextLength = 13;
    if (textLength > baseTextLength) {
      return `${((baseTextLength * baseSize) / textLength) + 1}px`;
    } else {
      return `${baseSize}px`;
    }
  }

  public onClickProject(): void {
    this.projectViewService.openProject(this.project);
  }
}
