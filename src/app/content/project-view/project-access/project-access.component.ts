import {Component, Input, OnInit} from '@angular/core';
import {AccessOption, ProjectType} from '../../shared/accessOption';

@Component({
  selector: 'app-access',
  templateUrl: './project-access.component.html',
  styleUrls: ['./project-access.component.css']
})
export class ProjectAccessComponent implements OnInit {

  @Input()
  public accessOptions: AccessOption;

  public iconUrl: string;
  public accessName: string;

  constructor() {
  }

  ngOnInit(): void {
    switch (this.accessOptions.type){
      case ProjectType.PlayStore:
        this.iconUrl = 'play-store.png';
        this.accessName = 'Play Store';
        break;
      case ProjectType.AppStore:
        this.iconUrl = 'app-store.png';
        this.accessName = 'App Store';
        break;
      case ProjectType.Web:
        this.iconUrl = 'web-site.png';
        this.accessName = 'Web Site';
        break;
      case ProjectType.Steam:
        this.iconUrl = 'steam.png';
        this.accessName = 'Steam';
        break;
      default:
        break;
    }
  }
}
