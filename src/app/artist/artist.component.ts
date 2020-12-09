import { Component, OnInit, Input, Output } from '@angular/core';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  @Input()
  artist: Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
