import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ValidacaoComumComponent } from './pages/validacao-comum/validacao-comum.component';
import { ValidacaoReactiveComponent } from './pages/validacao-reactive/validacao-reactive.component';
import { InputComponent } from './components/input/input.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'validacao-comum',
    pathMatch: 'full'
  },
  {
    path: 'validacao-comum',
    component: ValidacaoComumComponent
  },
  {
    path: 'validacao-reactive',
    component: ValidacaoReactiveComponent,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ValidacaoComumComponent,
    ValidacaoReactiveComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
