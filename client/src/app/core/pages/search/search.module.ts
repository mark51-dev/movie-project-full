import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchPageComponent, SearchItemComponent, SearchContainerComponent, SearchFilterComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
