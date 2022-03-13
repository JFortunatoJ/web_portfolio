import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectModalComponent} from './project-modal.component';


@NgModule({
  declarations: [ProjectModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectModalComponent,
  ]
})
export class ProjectModalModule {
}
