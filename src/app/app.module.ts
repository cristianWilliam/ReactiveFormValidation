import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ValidacaoComumComponent } from './pages/validacao-comum/validacao-comum.component';
import { ValidacaoReactiveComponent } from './pages/validacao-reactive/validacao-reactive.component';

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
    ValidacaoReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
