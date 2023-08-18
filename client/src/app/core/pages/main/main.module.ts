import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MainItemComponent } from './components/main-item/main-item.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { MainPageService } from './services/main-page.service';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent,
    MainItemComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  providers: [
    MainPageService
  ]
})
export class MainModule { }
