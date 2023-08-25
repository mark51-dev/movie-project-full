import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  searchResult: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      switchMap((res: any) => {
        if (!Object.keys(res).length) {
          return this.http.get('api/search');
        }
        if (Object.keys(res).length) {
          return this.http.get('api/search/filter', {
            params: res
          });
        }
        return of([]);
      })
    ).subscribe((res: any) => {
      this.searchResult = res.reduce((acc: any, item: any, index: number) => {
        acc.push(item)
        return acc;
      }, []).flat();
      this.cdr.markForCheck();
    });
  }
}
