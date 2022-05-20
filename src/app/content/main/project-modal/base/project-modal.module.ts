import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectModalComponent} from './project-modal.component';
import {ProjectBasicInfoComponent} from '../project-basic-info/project-basic-info.component';
import {ProjectAccessComponent} from '../project-access/project-access.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectBasicInfoComponent,
    ProjectAccessComponent
  ],
  declarations: [
    ProjectBasicInfoComponent,
    ProjectAccessComponent
  ],
})
export class ProjectModalModule {
}
