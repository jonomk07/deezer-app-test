import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  searchInput: string;
  artists: Artist[] = new Array();
  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.defaultArtists(2, 12);
  }

  searchArtist(): void {
    this.artists = new Array();
    if ((this.searchInput === '') || (this.searchInput === ' ')) {
      this.defaultArtists(2, 12);
    } else {
      this.artistService.searchArtist(this.searchInput).subscribe((searchResult) => {
        searchResult.data.forEach(searchArtist => {
          this.artists.push(searchArtist);
        });
      });
    }
  }

  defaultArtists(lowerLimit: number, upperLimit: number): void {
    this.artists = new Array();
    this.artistService.getArtists(lowerLimit, upperLimit)
      .subscribe((artist_x) => {
        const artists_list = artist_x;
        artists_list.forEach(artist_each => {
          if (!('error' in artist_each)) {
            this.artists.push(artist_each);
          }
        });
      });
  }

}
