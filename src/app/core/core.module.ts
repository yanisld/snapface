import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { LOCALE_ID } from '@angular/core';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    httpInterceptorProviders,
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class CoreModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }
