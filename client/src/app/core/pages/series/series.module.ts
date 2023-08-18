import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesContainerComponent } from './components/series-container/series-container.component';
import { SeriesItemComponent } from './components/series-item/series-item.component';
import { SeriesPageComponent } from './series-page/series-page.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { SeriesService } from './services/series.service';
import { MoviesModule } from '../movies/movies.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    SeriesContainerComponent,
    SeriesItemComponent,
    SeriesPageComponent,
    SeriesDetailsComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    MoviesModule,
    SharedModule
  ],
  providers: [
    SeriesService
  ]
})
export class SeriesModule { }
