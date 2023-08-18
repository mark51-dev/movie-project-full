import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { IMovieShortInfo } from '../../models/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent implements OnInit {
  movieList: IMovieShortInfo[];
  currentPage: number = 1;
  moviesCount: number = 0;
  pageLimit: number = 10;

  constructor(private movieService: MovieService, private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.fetchMovies(this.currentPage, this.pageLimit);
  }
  nextPage() {
    if (this.currentPage < this.checkLastPage()) {
      this.currentPage += 1;
      this.fetchMovies(this.currentPage, this.pageLimit);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.fetchMovies(this.currentPage, this.pageLimit);
    }
  }

  checkLastPage() {
    return Math.ceil(this.moviesCount / this.pageLimit);
  }

  fetchMovies(page: number = 1, limit: number = 2 ) {
   this.movieService.fetchMoviesPagination(page, limit).subscribe((res: any) => {
     this.cdr.markForCheck();
     this.movieList = res[0];
     this.moviesCount = res[1];
   });
  }
}
