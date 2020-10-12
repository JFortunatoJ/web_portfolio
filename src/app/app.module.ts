import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire';
import { environment} from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content-main/content.component';
import { ContentVideoComponent } from './content/content-video/content-video.component';
import { ContentAboutmeComponent } from './content/content-aboutme/content-aboutme.component';
import { ContentProjectsComponent } from './content/content-projects/content-projects-main/content-projects.component';
import { ContentProjectsProjectComponent } from './content/content-projects/content-projects-project/content-projects-project.component';
import {FormsModule} from '@angular/forms';
import { ContentProjectsProjectTagComponent } from './content/content-projects/content-projects-project/content-projects-project-tag/content-projects-project-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    ContentVideoComponent,
    ContentAboutmeComponent,
    ContentProjectsComponent,
    ContentProjectsProjectComponent,
    ContentProjectsProjectTagComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
