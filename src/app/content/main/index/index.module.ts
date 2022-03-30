import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutmeComponent} from '../about-me/aboutme.component';
import {VideoComponent} from '../video/video.component';
import {ProjectsComponent} from '../projects/base/projects.component';
import {ProjectElementComponent} from '../projects/project-element/project-element.component';
import {ProjectTagComponent} from '../projects/project-element/project-tag/project-tag.component';
import {RouterModule} from '@angular/router';
import {ProjectModalComponent} from '../project-modal/base/project-modal.component';
import {ProjectBasicInfoComponent} from 'src/app/content/main/project-modal/project-basic-info/project-basic-info.component';
import {ProjectAccessComponent} from 'src/app/content/main/project-modal/project-access/project-access.component';

import {YouTubePlayerModule} from "@angular/youtube-player";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    YouTubePlayerModule
  ],
  exports: [
    AboutmeComponent,
    VideoComponent,
    ProjectsComponent,
    ProjectModalComponent,
    ProjectBasicInfoComponent,
    ProjectAccessComponent
  ],
  declarations: [
    AboutmeComponent,
    VideoComponent,
    ProjectsComponent,
    ProjectElementComponent,
    ProjectTagComponent,
    ProjectModalComponent,
    ProjectBasicInfoComponent,
    ProjectAccessComponent
  ]
})
export class IndexModule {
}
