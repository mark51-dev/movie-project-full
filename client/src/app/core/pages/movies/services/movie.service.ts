import {Injectable} from '@angular/core';
import {IMovieShortInfo} from "../models/movie.interface";
import { Observable, switchMap } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {
  }

  fetchMovies(): Observable<IMovieShortInfo[]> {
    return this.http.get<IMovieShortInfo[]>('/api/movies');
  }

  fetchMoviesPagination(page: number, limit: number): Observable<any> {
    return this.http.get(`/api/movies/pagination?page=${page}&limit=${limit}`)
  }
}
