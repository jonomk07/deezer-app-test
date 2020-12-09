import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from './artists/artists.component';
import { HttpClientModule } from '@angular/common/http';
import { FanFormatterPipe } from './pipes/fan-formatter.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { TrackComponent } from './track/track.component';
import { DurationFormatterPipe } from './pipes/duration-formatter.pipe';
import { AlbumComponent } from './albums/albums.component';
import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistsComponent,
    FanFormatterPipe,
    ArtistDetailsComponent,
    TracklistComponent,
    TrackComponent,
    DurationFormatterPipe,
    AlbumComponent,
    LoadingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
