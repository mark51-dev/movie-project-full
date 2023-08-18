import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterLink} from "@angular/router";
import {VideoPlayerComponent} from './components/video-player/video-player.component';
import {PlaylistItemComponent} from './components/video-player/components/playlist-item/playlist-item.component';
import {
  PlaylistContainerComponent
} from './components/video-player/components/playlist-container/playlist-container.component';
import {HideCursorDirective} from './directives/hide-cursor.directive';
import {HidePlayerControlsDirective} from './directives/hide-player-controls.directive';
import { HorizontalCarouselDirective } from './directives/horizontal-carousel.directive';


@NgModule({
  declarations: [
    NavigationComponent,
    VideoPlayerComponent,
    PlaylistItemComponent,
    PlaylistContainerComponent,
    HideCursorDirective,
    HidePlayerControlsDirective,
    HorizontalCarouselDirective,
  ],
  exports: [
    NavigationComponent,
    VideoPlayerComponent,
    HorizontalCarouselDirective
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule {
}
