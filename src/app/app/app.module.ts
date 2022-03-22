import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {FooterComponent} from '../footer/footer.component';
import {GameComponent} from '../game/game.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {IndexModule} from '../content/main/index/index.module';
import {IndexComponent} from '../content/main/index/index.component';
import {PrivacyPolicyComponent} from '../privacy-policies/bouce-light/privacy-policy.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {YouTubePlayerModule} from "@angular/youtube-player";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    GameComponent,
    IndexComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IndexModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    YouTubePlayerModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
