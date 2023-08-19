import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    this.route.queryParams.subscribe((res: any) => {
      this.http.get('api/search', {
        params: res
      }).subscribe((res) => {
        this.searchResult = res;
        this.cdr.markForCheck();
      });
    })
  }
}
