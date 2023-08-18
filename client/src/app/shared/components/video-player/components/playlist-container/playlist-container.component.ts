import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.scss']
})
export class PlaylistContainerComponent implements OnInit, OnDestroy {
  @Input() videoPlaylist: [];
  selectedIndex: number = 0;

  videoByIndexSub: Subscription;

  constructor(private playerService: PlayerService) {
  }

  selectedVideoByIndex(index: number) {
    this.playerService.setPlayStatus(false);
    this.playerService.setVideoProgress('0');
    this.playerService.setVideoByIndex(index);
    this.playerService.selectVideo();
  }

  ngOnInit(): void {
    this.videoByIndexSub = this.playerService.videoByIndex$.subscribe(index => this.selectedIndex = index);
  }

  ngOnDestroy() {
    this.videoByIndexSub.unsubscribe();
  }
}
