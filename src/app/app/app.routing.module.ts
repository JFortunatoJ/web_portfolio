import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from '../content/main/index/index.component';
import {PrivacyPolicyComponent} from '../privacy-policies/bouce-light/privacy-policy.component';

const APP_ROUTES: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bouncelight/privacy-policy', component: PrivacyPolicyComponent},
  {path: 'project', loadChildren: () => import('src/app/content/project-view/projects-view.module').then(mod => mod.ProjectsViewModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
