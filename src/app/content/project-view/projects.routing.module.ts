import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';

import {ProjectViewBaseComponent} from './project-view-base.component';
import {HeroisPandemiaComponent} from './herois-pandemia/herois-pandemia.component';
import {RoadStarComponent} from './road-star/road-star.component';
import {Project} from '../shared/project';

const PROJECTS_ROUTES: Routes = [
  {path: '', component: ProjectViewBaseComponent,
  children: [
    {
      path: 'roadstar',
      component: RoadStarComponent,
      data: { id: 'roadstar' }
    },
    {
      path: 'heroispandemia',
      component: HeroisPandemiaComponent,
      data: { id: 'heroispandemia' }
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(PROJECTS_ROUTES)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {

}
