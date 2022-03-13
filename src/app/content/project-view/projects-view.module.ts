import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProjectsRoutingModule} from './projects.routing.module';
import {ProjectBasicInfoComponent} from './project-basic-info/project-basic-info.component';
import {ProjectAccessComponent} from './project-access/project-access.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';
import {HeroisPandemiaComponent} from './herois-pandemia/herois-pandemia.component';
import {ProjectViewBaseComponent} from './project-view-base.component';
import {ImageCarouselComponent} from '../../image-carousel/image-carousel.component';


@NgModule({
  declarations: [
    ProjectViewBaseComponent,
    ProjectBasicInfoComponent,
    ProjectAccessComponent,
    ImageCarouselComponent,
    HeroisPandemiaComponent,
    UnderConstructionComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsViewModule {
}
