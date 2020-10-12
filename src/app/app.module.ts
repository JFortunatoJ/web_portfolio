import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content-main/content.component';
import { ContentVideoComponent } from './content/content-video/content-video.component';
import { ContentAboutmeComponent } from './content/content-aboutme/content-aboutme.component';
import { ContentProjectsComponent } from './content/content-projects/content-projects-main/content-projects.component';
import { ContentProjectsProjectComponent } from './content/content-projects/content-projects-project/content-projects-project.component';

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
    ContentProjectsProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
