import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';

import {ProjectViewBaseComponent} from './project-view-base.component';
import {HeroisPandemiaComponent} from './herois-pandemia/herois-pandemia.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';
import {Project} from '../shared/project';

const PROJECTS_ROUTES: Routes = [
  {path: '', component: ProjectViewBaseComponent,
  children: [
    {
      path: 'roadstar',
      component: UnderConstructionComponent,
      data: { id: 'roadstar' }
    },
    {
      path: 'heroispandemia',
      component: UnderConstructionComponent,
      data: { id: 'heroispandemia' }
    },
    {
      path: 'joytoy',
      component: UnderConstructionComponent,
      data: { id: 'joytoy' }
    },
    {
      path: 'traderlife',
      component: UnderConstructionComponent,
      data: { id: 'traderlife' }
    },
    {
      path: 'bandeirantes2',
      component: UnderConstructionComponent,
      data: { id: 'bandeirantes2' }
    },
    {
      path: 'cavecoaster',
      component: UnderConstructionComponent,
      data: { id: 'cavecoaster' }
    },
    {
      path: 'uirapuru',
      component: UnderConstructionComponent,
      data: { id: 'uirapuru' }
    },
    {
      path: 'senninhaAR',
      component: UnderConstructionComponent,
      data: { id: 'senninhaAR' }
    },
    {
      path: 'bouncelight',
      component: UnderConstructionComponent,
      data: { id: 'bouncelight' }
    },
    {
      path: 'carla',
      component: UnderConstructionComponent,
      data: { id: 'carla' }
    },
    {
      path: 'alphacore',
      component: UnderConstructionComponent,
      data: { id: 'alphacore' }
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(PROJECTS_ROUTES)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {

}
