import { Component, OnInit } from '@angular/core';
import { TracklistService } from '../services/tracklist.service';
import { Track } from '../models/track';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistComponent implements OnInit {

  tracks: Track[];
  artistId: number;

  constructor(private activatedRoute: ActivatedRoute, private tracklistService: TracklistService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));
    });

    this.tracklistService.getTracklist(this.artistId)
      .subscribe((x) => {
        this.tracks = x.data;
      });

  }
}

