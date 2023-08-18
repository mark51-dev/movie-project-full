import { Component, Input, OnInit } from '@angular/core';
import {IMovieShortInfo} from "../../models/movie.interface";

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit{
  @Input() movie: IMovieShortInfo;
  ngOnInit(): void {
  }
}
