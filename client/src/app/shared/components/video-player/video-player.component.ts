import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import Hls from "hls.js";
import {PlayerService} from "./services/player.service";
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private playerService: PlayerService) {
  }

  @ViewChild('video', {static: true}) video: ElementRef;
  @ViewChild('volumeControl', {static: true}) volumeControl: ElementRef;
  @ViewChild('playerContainer', {static: true}) playerContainer: ElementRef;
  @ViewChild('videoProgressControl', {static: true}) videoProgressControl: ElementRef;

  playStatusSub: Subscription;
  videoProgressSub: Subscription;

  selectedVideoId = 0;

  currentMinutes: number;
  currentSeconds: number;
  durationMinutes: number;
  durationSeconds: number;
  playStop: boolean = false;
  loading: boolean = true;
  @Input() playlist: any = []

  padZeros(value = 0, padding = 2) {
    return `${Math.floor(value)}`.padStart(padding, '0');
  }

  load() {

    if (Hls.isSupported()) {
      let hls = this.playerService.hls;
      hls.loadSource(this.playlist[this.selectedVideoId].url);
      hls.attachMedia(this.video.nativeElement);

    } else if (this.video.nativeElement.canPlayType('application/vnd.apple.mpegurl')) {
      this.video.nativeElement.src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
      this.video.nativeElement.addEventListener('canplay', () => {
        this.video.nativeElement.play();
      });
    }
  }

  playerTimeProgress() {
    this.durationMinutes = this.video.nativeElement.duration / 60;
    this.durationSeconds = this.video.nativeElement.duration - Math.floor(this.durationMinutes) * 60;
    this.currentMinutes = this.video.nativeElement.currentTime / 60;
    this.currentSeconds = this.video.nativeElement.currentTime - Math.floor(this.currentMinutes) * 60;
  }

  onFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const videoPlayerDiv = this.playerContainer.nativeElement;
      if (videoPlayerDiv?.requestFullscreen) {
        videoPlayerDiv.requestFullscreen();
      }
    }
  }

  ngOnInit(): void {
    this.playerService.setPlaylist(this.playlist);
    this.playerService.videoByIndex$.subscribe(index => this.selectedVideoId = index);
    this.playStatusSub = this.playerService.playStatus$.subscribe(res => this.playStop = res);
    this.videoProgressSub = this.playerService.videoProgress$.subscribe(res => {
      this.videoProgressControl.nativeElement.value = (this.video.nativeElement.currentTime / this.video.nativeElement.duration || 0);
    });
    this.initEvents();
  }

  onInputVideoProgress() {
    this.video.nativeElement.currentTime = Math.floor((this.videoProgressControl.nativeElement.value * this.video.nativeElement.duration));
  }

  onChangeVideoProgress() {

  }

  onInputAudio() {
    this.video.nativeElement.volume = this.volumeControl.nativeElement.value;
  }

  onPlayStop() {
    this.video.nativeElement[this.playStop ? 'pause' : 'play']();
    this.playerService.setPlayStatus(!this.playStop);
    if (this.playStop) {
      this.playerService.hls.startLoad();
    }
  }

  initEvents() {
    fromEvent(this.video.nativeElement, 'timeupdate').subscribe(() => {
      this.playerService.setVideoProgress(this.video.nativeElement.currentTime.toString());
      this.playerTimeProgress();
      if (Math.ceil(this.video.nativeElement.currentTime) === Math.floor(this.video.nativeElement.duration)) {
        if (this.selectedVideoId === this.playlist.length - 1) {
          this.playerService.setPlayStatus(false);
        }
        if (this.selectedVideoId < this.playlist.length - 1) {
          this.selectedVideoId += 1;
          this.playerService.setVideoByIndex(this.selectedVideoId);
          this.playerService.setCurrentVideo(this.playlist[this.selectedVideoId].url);
          this.video.nativeElement.play();
        }
      }
    });

    fromEvent(this.video.nativeElement, 'seeking').subscribe((event: any) => {
      this.loading = true;
    });

    fromEvent(this.video.nativeElement, 'seeked').subscribe((event: any) => {
      this.loading = false;
    });

    fromEvent(this.video.nativeElement, 'loadedmetadata').subscribe((event: any) => {
      this.loading = false;
    });

    fromEvent(this.video.nativeElement, 'waiting').subscribe((event: any) => {
      this.loading = true;
    });

    fromEvent(this.video.nativeElement, 'progress').subscribe((event: any) => {
      this.loading = false;
    });
  }

  ngAfterViewInit() {
    this.load();
  }

  ngOnDestroy(): void {
    this.playStatusSub.unsubscribe();
    this.playerService.setVideoByIndex(0);
    this.playerService.setPlayStatus(false);
  }
}
