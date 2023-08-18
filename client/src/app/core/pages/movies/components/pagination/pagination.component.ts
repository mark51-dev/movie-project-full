import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  currentPage: number = 1;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: Params) => {
      this.currentPage = +res['page'] || 1;
    })
  }

  onPageChangeNext(): void {
    this.currentPage += 1;
    this.onPaginationChange();
  }

  onPageChangePrevious(): void {
    this.currentPage -= 1;
    this.onPaginationChange();
  }

  onPaginationChange() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      replaceUrl: true
    });
  }
}
