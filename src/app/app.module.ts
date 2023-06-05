import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaBuscaPassagensComponent } from './project/tela-busca-passagens/tela-busca-passagens.component';

@NgModule({
  declarations: [AppComponent, TelaBuscaPassagensComponent],
  imports: [BrowserModule, CommonModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
