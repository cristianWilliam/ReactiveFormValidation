import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-validacao-reactive',
  templateUrl: './validacao-reactive.component.html',
  styleUrls: ['./validacao-reactive.component.scss']
})
export class ValidacaoReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.construirForm();
  }

  construirForm(){

    const validate = (valueExpected: string): ValidatorFn => 
    (control: AbstractControl): ValidationErrors | null => 
      control.value === valueExpected ? null : { valueExpected }

    this.form = this.fb.group({
      nome: ['', [Validators.required, validate('Neymar')]],
      endereco: this.fb.group({
        rua: ['', [Validators.required]]
      })
    });
  }

  getFormControl(controlName: string){
    return this.form.get(controlName) as FormControl
  }

  submit(){
    console.log(this.form);
  }

}
