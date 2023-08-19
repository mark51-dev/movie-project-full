import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import Hls from "hls.js";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  hls: Hls = new Hls({autoStartLoad : false})
  private volume: Subject<any> = new Subject()
  private videoProgress: BehaviorSubject<any> = new BehaviorSubject(0)
  private playStatusProp: BehaviorSubject<any> = new BehaviorSubject(false)
  private videoByIndex: BehaviorSubject<any> = new BehaviorSubject(0)
  private playlist: BehaviorSubject<any> = new BehaviorSubject([])


  setVolume(volume: string) {
    this.volume.next(volume)
  }

  get volume$() {
    return this.volume.asObservable();
  }

  setVideoProgress(videoProgress: string) {
    this.videoProgress.next(videoProgress)
  }

  get videoProgress$() {
    return this.videoProgress.asObservable();
  }

  setPlayStatus(playStatus: boolean) {
    this.playStatusProp.next(playStatus);
  }

  get playStatus$() {
    return this.playStatusProp.asObservable();
  }

  setCurrentVideo(url: string) {
    this.hls.loadSource(url);
  }

  setVideoByIndex(index: number) {
    return this.videoByIndex.next(index);
  }

  get videoByIndex$(): Observable<any> {
    return this.videoByIndex.asObservable()
  }

  setPlaylist(playlist: []) {
    this.playlist.next(playlist);
  }

  selectVideo() {
    const index = this.videoByIndex.getValue();
    // @ts-ignore
    const videoUrl = this.playlist.getValue()[index].url;
    this.setCurrentVideo(videoUrl);
  }
}
