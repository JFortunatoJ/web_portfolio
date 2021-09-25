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

  private projectName: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.projectName = document.querySelectorAll('.project-name label');

    this.projectName.forEach(box => {
      box.style.fontSize = this.getFontSize(box.textContent.length);
    });

  }

  getFontSize(textLength): string {
    const baseSize = 7;
    const baseTextLength = 13;
    if (textLength > baseTextLength) {
      return `${((baseTextLength * baseSize) / textLength) + 1}vw`;
    } else {
      return `${baseSize}vw`;
    }
  }
}
