import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProjectsRoutingModule} from './projects.routing.module';
import {ProjectBasicInfoComponent} from './project-basic-info/project-basic-info.component';
import {ProjectAccessComponent} from './project-access/project-access.component';
import {RoadStarComponent} from './road-star/road-star.component';
import {HeroisPandemiaComponent} from './herois-pandemia/herois-pandemia.component';
import {ProjectViewBaseComponent} from './project-view-base.component';


@NgModule({
  declarations: [
    ProjectViewBaseComponent,
    ProjectBasicInfoComponent,
    ProjectAccessComponent,
    HeroisPandemiaComponent,
    RoadStarComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsViewModule {}
