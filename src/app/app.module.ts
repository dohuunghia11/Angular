import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { CountdownTimerComponent } from './countdown/countdown-timer.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    LoginComponent,
    TemplateDrivenFormComponent,
    CountdownTimerComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
