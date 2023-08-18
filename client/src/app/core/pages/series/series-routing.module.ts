import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesPageComponent } from './series-page/series-page.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesPageComponent
  },
  {
    path: 'details/:id',
    component: SeriesDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
