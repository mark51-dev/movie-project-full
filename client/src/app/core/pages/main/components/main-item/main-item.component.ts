import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.scss'],
})
export class MainItemComponent implements OnInit {
  @Input() movie: any;
  constructor() {
  }
  ngOnInit(): void {
  }

}
