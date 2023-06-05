import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-busca-passagens',
  templateUrl: './tela-busca-passagens.component.html',
  styleUrls: ['./tela-busca-passagens.component.css'],
})
export class TelaBuscaPassagensComponent implements OnInit {
  public origem!: any;
  public destino!: any;
  public dataPartida!: any;
  public dataRetorno!: any;
  public qtdPassageiros!: any;

  ngOnInit(): void {}
}
