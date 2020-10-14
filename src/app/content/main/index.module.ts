import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutmeComponent} from './about-me/aboutme.component';
import {VideoComponent} from './video/video.component';
import {ProjectsComponent} from './projects/base/projects.component';
import {ProjectElementComponent} from './projects/project-element/project-element.component';
import {ProjectTagComponent} from './projects/project-element/project-tag/project-tag.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutmeComponent,
    VideoComponent,
    ProjectsComponent
  ],
  declarations: [
    AboutmeComponent,
    VideoComponent,
    ProjectsComponent,
    ProjectElementComponent,
    ProjectTagComponent
  ]
})
export class IndexModule { }
