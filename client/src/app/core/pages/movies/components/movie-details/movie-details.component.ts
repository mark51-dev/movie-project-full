import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { from, map, pipe, Subscription } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {IMovieFull} from "../../models/movie.interface";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: IMovieFull;
  sub: Subscription;

  constructor(private router: ActivatedRoute, private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  makeRequest(id: string) {
    const url = `/api/movies/details/${id}`;

    this.http.get(url)
    .pipe(
      map((res: any) => {
        return {
          ...res,
          playlist: res.playlist.map((item: any) => JSON.parse(item))
        }
      })
    )
    .subscribe({
      next: (res: any) => {
        this.cdr.markForCheck();
        this.movie = res as IMovieFull;
      }
    });
  }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      const id = params['id'];
      this.makeRequest(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
