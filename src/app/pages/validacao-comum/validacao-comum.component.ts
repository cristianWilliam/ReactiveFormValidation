import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPessoa } from 'src/app/models/pessoa';

@Component({
  selector: 'app-validacao-comum',
  templateUrl: './validacao-comum.component.html',
  styleUrls: ['./validacao-comum.component.scss']
})
export class ValidacaoComumComponent implements OnInit {

  @ViewChild('form')
  formControl: NgForm;

  model: IPessoa;

  constructor() {
  }


  initModel(){
    this.model = {
      nome: '',
      sobrenome: '',
      nacionalidade: '',
      idade: 0,
      dataNascimento: null,
      endereco: {
        rua: '',
        bairro: '',
        estado: '',
        cidade: '',
        cep: '',
        complemento: ''
      }
    };

  }
  ngOnInit(): void {
    this.initModel();
  }

  submit(){
    console.log(this.formControl);
    console.log(this.model);  
  }

}
