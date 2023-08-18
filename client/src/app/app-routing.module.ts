import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/core/pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('src/app/core/pages/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'series',
    loadChildren: () => import('src/app/core/pages/series/series.module').then(m => m.SeriesModule)
  },
  {
    path: 'search',
    loadChildren: () => import('src/app/core/pages/search/search.module').then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
