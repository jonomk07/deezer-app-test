import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Albums } from '../models/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
  getAlbums(query?: number): Observable<Albums> {
    return this.http.get<Albums>(`${environment.apiUrl}${query}/albums`);
  }
}
