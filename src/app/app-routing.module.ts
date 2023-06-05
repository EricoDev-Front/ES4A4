import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaBuscaPassagensComponent } from './project/tela-busca-passagens/tela-busca-passagens.component';

const routes: Routes = [{ path: '', component: TelaBuscaPassagensComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
