import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  form: FormGroup;
  gengres = ['Экшн',
    'Приключения',
    'Комедия',
    'Драма',
    'Ужасы',
    'Мистика',
    'Романтика',
    'Научная фантастика',
    'Триллер',
    'Фэнтези',
    'Анимация',
    'Криминал',
    'Семейный',
    'Документальный',
    'Музыкальный',
    'Военный',
    'Вестерн',
    'Исторический',
    'Биография'];
  countries = [
    'США',
    'Индия',
    'Китай',
    'Япония',
    'Южная Корея',
    'Франция',
    'Великобритания',
    'Германия',
    'Испания',
    'Италия',
    'Россия',
    'Бразилия',
  ];
  years: any = [];
  types: any = ['movie', 'series'];
  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private router: Router, private route: ActivatedRoute) {
  }
  formInit() {
    this.form = this.fb.group({
      genre: this.fb.control(''),
      year: this.fb.control(''),
      country: this.fb.control(''),
      type: this.fb.control('series')
    });

    this.generateYearArray();
  }

  ngOnInit(): void {
    this.formInit();
    this.form.patchValue(this.route.snapshot.queryParams);
  }

  generateYearArray() {
    const currentYear = new Date().getFullYear();

    for (let year = 1929; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  handleClick() {
    this.router.navigate([], {
      queryParams: this.removeUndefinedFields(this.form.getRawValue()),
      relativeTo: this.route,
    })
  }

  removeUndefinedFields(obj: any) {
    const cleanedObject: any = {};
    for (const key in obj) {
      if (obj[key] !== '') {
        cleanedObject[key] = obj[key];
      }
    }
    return cleanedObject;
  }
}
