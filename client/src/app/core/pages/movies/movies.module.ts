import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesContainerComponent} from './components/movies-container/movies-container.component';
import {MoviesItemComponent} from './components/movies-item/movies-item.component';
import {MoviesPageComponent} from './movies-page/movies-page.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {SharedModule} from "../../../shared/shared.module";
import { PaginationComponent } from './components/pagination/pagination.component';
import { MovieService } from './services/movie.service';


@NgModule({
  declarations: [
    MoviesContainerComponent,
    MoviesItemComponent,
    MoviesPageComponent,
    MovieDetailsComponent,
    PaginationComponent
  ],
  exports: [
    MoviesItemComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ],
  providers: [MovieService]
})
export class MoviesModule {
}
