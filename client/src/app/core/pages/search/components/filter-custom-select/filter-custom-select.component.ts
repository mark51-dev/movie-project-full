import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-filter-custom-select',
  templateUrl: './filter-custom-select.component.html',
  styleUrls: ['./filter-custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterCustomSelectComponent),
      multi: true
    }
  ]
})
export class FilterCustomSelectComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  @Input() itemList: any[];
  @Input() disabled = false;
  @Input() default = '';
  value = '';
  @ViewChild('selectedItemInput', {static: true}) selectInput: ElementRef<HTMLInputElement>;
  onChange = (rating: number) => {};
  onTouched = () => {};

  showList = false;
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.onChange(obj)
  }

  toggleShowList() {
    this.showList = !this.showList;
  }

  ngOnInit(): void {
    this.setDefault();
  }

  ngAfterViewInit(): void {
    this.writeValue(this.selectInput.nativeElement.value)
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: Event) {
    // @ts-ignore
    if (!this.selectInput.nativeElement.contains(event['target'])) {
      this.showList = false;
    }
  }

  setDefault() {
    return this.itemList.includes((item: any) => {
      if (item === this.default) {
        this.default = item;
      }
    })
  }

  selectItem(event: MouseEvent) {
    const clickEvent = event.target as HTMLElement;
    this.selectInput.nativeElement.value = clickEvent.innerText;
    this.writeValue(this.selectInput.nativeElement.value);
  }
}
