import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IMovieShortInfo } from '../../../movies/models/movie.interface';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-container',
  templateUrl: './series-container.component.html',
  styleUrls: ['./series-container.component.scss']
})
export class SeriesContainerComponent implements OnInit {
  seriesList: any;
  currentPage: number = 1;
  seriesCount: number = 0;
  pageLimit: number = 10;

  constructor(private seriesService: SeriesService, private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.fetchSeries(this.currentPage, this.pageLimit);
  }
  nextPage() {
    if (this.currentPage < this.checkLastPage()) {
      this.currentPage += 1;
      this.fetchSeries(this.currentPage, this.pageLimit);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.fetchSeries(this.currentPage, this.pageLimit);
    }
  }

  checkLastPage() {
    return Math.ceil(this.seriesCount / this.pageLimit);
  }

  fetchSeries(page: number = 1, limit: number = 2 ) {
    this.seriesService.fetchSeriesPagination(page, limit).subscribe((res: any) => {
      this.cdr.markForCheck();
      this.seriesList = res[0];
      this.seriesCount = res[1];
    });
  }
}
