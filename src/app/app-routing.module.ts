import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumComponent } from './albums/albums.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'artist',
    component: ArtistsComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'details/:id',
    component: ArtistDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'artist'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
