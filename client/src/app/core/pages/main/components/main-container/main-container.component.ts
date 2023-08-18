import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit, OnDestroy {
  moviesSeriesMixList: Record<any, any> = {};
  fetchMoviesAndSeriesSub: Subscription;
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  fetchMoviesAndSeries() {
    this.fetchMoviesAndSeriesSub = this.http.get('/api/main')
    .subscribe((res: any) => {
      this.moviesSeriesMixList['movies'] = res['movies'];
      this.moviesSeriesMixList['series'] = res['series'];
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.fetchMoviesAndSeriesSub.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchMoviesAndSeries();
  }
}
