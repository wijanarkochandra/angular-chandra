import { Component, forwardRef, input, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { AlertErrorInputComponent } from '@shared/widgets/alert-error-input/alert-error-input.component';

@Component({
  selector: 'input-text',
  styleUrls: ['./input-text.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, AlertErrorInputComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
  template: `
  <input (ngModelChange)="onValueChange($event)" [(ngModel)]="value" type="email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          [placeholder]="placeholder()" />
          <alert-error [control]="control" [label]="label()"></alert-error>
          `
})
export class InputTextComponent implements ControlValueAccessor, OnInit {

  @Input() control!: FormControl | any;
  placeholder = input('Enter'); //default
  label = input('label'); //default

  value: any;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  hasError(error: string): boolean | null {
    // console.log(this.control.errors);
    return (
      this.control?.hasError(error) &&
      (this.control?.touched || this.control?.dirty)
    );
  }

  onValueChange(value: any) {
    this.onChange(value);
  }

  // Fungsi yang akan dipanggil ketika nilai diubah
  onChange: (date: any) => void = () => { };
  onTouched: () => void = () => { };

}
