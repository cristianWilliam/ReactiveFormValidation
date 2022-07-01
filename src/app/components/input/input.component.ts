import { Component, Input, OnInit, Optional } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input()
  type: string

  @Input()
  formControlName: string

  value: string = ''
  onChange = (value:string) => {};
  onTouched = () => {};

  formControl: FormControl

  constructor(@Optional() public container: ControlContainer) { }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.getFormControl();
  }

  getFormControl(){
    this.formControl = this.container.control?.get(this.formControlName) as FormControl
  }

}
