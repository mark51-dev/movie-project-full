import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-series-item',
  templateUrl: './series-item.component.html',
  styleUrls: ['./series-item.component.scss']
})
export class SeriesItemComponent {
  @Input() series: any;
}
