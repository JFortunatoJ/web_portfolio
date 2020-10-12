import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-projects-project-tag',
  templateUrl: './content-projects-project-tag.component.html',
  styleUrls: ['./content-projects-project-tag.component.css']
})
export class ContentProjectsProjectTagComponent implements OnInit {

  @Input()
  public tag: string;
  public hexColor: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.tag) {
      case '3D':
        this.hexColor = 'darkgoldenrod';
        break;
      case 'Mobile':
        this.hexColor = '#00619e';
        break;
      case 'C#':
        this.hexColor = '#e33939';
        break;
      case 'Unity':
        this.hexColor = '#09a9a9';
        break;
      case 'Web GL':
        this.hexColor = 'darkgreen';
        break;
      case '2D':
        this.hexColor = 'darkgoldenrod';
        break;
      case 'Windows':
        this.hexColor = 'blueviolet';
        break;
      case 'VR':
        this.hexColor = 'darkorange';
        break;
      case 'AR':
        this.hexColor = 'chartreuse';
        break;
    }
  }
}
