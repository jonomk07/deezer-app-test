import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../models/artist';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  artist: Artist;
  artistId: number;

  constructor(private activatedRoute: ActivatedRoute, private artistService: ArtistService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));

      this.artistService.getArtist(this.artistId)
        .subscribe((x) => {
          if (!('error' in x)) {
            this.artist = x;
          }

        });

    });
  }

}
