import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {
  series: any;

  constructor(private router: ActivatedRoute, private http: HttpClient, private cdr: ChangeDetectorRef ) {
  }

  makeRequest(id: string) {
    const url = `/api/series/details/${id}`;

    this.http.get(url)
    .pipe(
      map((res: any) => {
        return {
          ...res,
          playlist: res.playlist.map((item: any) => JSON.parse(item))
        }
      })
    )
    .subscribe({
      next: (res: any) => {
        this.cdr.markForCheck();
        this.series = res;
      }
    });
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.makeRequest(id);
    });
  }
}
