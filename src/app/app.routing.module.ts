import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from './content/main/index.component';

const APP_ROUTES: Routes = [
  {path: '', component: IndexComponent },
  {path: 'project', loadChildren: () => import('src/app/content/project-view/projects-view.module').then(mod => mod.ProjectsViewModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
