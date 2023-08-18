import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieShortInfo } from '../../movies/models/movie.interface';

@Injectable()
export class SeriesService {
  constructor(private http: HttpClient) {
  }

  fetchSeries(): Observable<IMovieShortInfo[]> {
    return this.http.get<IMovieShortInfo[]>('/api/series');
  }

  fetchSeriesPagination(page: number, limit: number): Observable<any> {
    return this.http.get(`/api/series/pagination?page=${page}&limit=${limit}`)
  }
}
