import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Voos } from './voos.models';

@Component({
  selector: 'app-tela-busca-passagens',
  templateUrl: './tela-busca-passagens.component.html',
  styleUrls: ['./tela-busca-passagens.component.scss'],
})
export class TelaBuscaPassagensComponent implements OnInit {
  public cidades = [
    { chave: 'Guarulhos', valor: 'Guarulhos' },
    { chave: 'Belo Horizonte', valor: 'Belo Horizonte' },
    { chave: 'Salvador', valor: 'Salvador' },
    { chave: 'Manaus', valor: 'Manaus' },
  ];

  public tabela: Voos[] = [
    {
      preco: 'R$ 350,00',
      horario: '08:00',
      origem: 'Guarulhos',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 400,00',
      horario: '12:30',
      origem: 'Manaus',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 500,00',
      horario: '09:15',
      origem: 'Belo Horizonte',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 700,00',
      horario: '20:20',
      origem: 'Salvador',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 600,00',
      horario: '06:00',
      origem: 'Guarulhos',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 450,00',
      horario: '19:00',
      origem: 'Manaus',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 550,00',
      horario: '14:45',
      origem: 'Salvador',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 650,00',
      horario: '10:30',
      origem: 'Belo Horizonte',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 750,00',
      horario: '16:10',
      origem: 'Manaus',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 900,00',
      horario: '08:30',
      origem: 'Salvador',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 550,00',
      horario: '12:45',
      origem: 'Belo Horizonte',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 650,00',
      horario: '15:50',
      origem: 'Guarulhos',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 400,00',
      horario: '21:20',
      origem: 'Salvador',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 500,00',
      horario: '07:30',
      origem: 'Belo Horizonte',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 600,00',
      horario: '13:45',
      origem: 'Manaus',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 700,00',
      horario: '18:15',
      origem: 'Salvador',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 550,00',
      horario: '11:00',
      origem: 'Guarulhos',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 450,00',
      horario: '16:45',
      origem: 'Belo Horizonte',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 800,00',
      horario: '19:30',
      origem: 'Manaus',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 900,00',
      horario: '08:10',
      origem: 'Salvador',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 350,00',
      horario: '14:20',
      origem: 'Guarulhos',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 550,00',
      horario: '10:00',
      origem: 'Belo Horizonte',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 650,00',
      horario: '15:10',
      origem: 'Manaus',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 750,00',
      horario: '11:55',
      origem: 'Salvador',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 500,00',
      horario: '17:40',
      origem: 'Belo Horizonte',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 450,00',
      horario: '09:15',
      origem: 'Guarulhos',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 550,00',
      horario: '13:50',
      origem: 'Salvador',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 650,00',
      horario: '16:30',
      origem: 'Guarulhos',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 750,00',
      horario: '10:50',
      origem: 'Manaus',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 350,00',
      horario: '18:20',
      origem: 'Belo Horizonte',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 450,00',
      horario: '08:15',
      origem: 'Salvador',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 550,00',
      horario: '11:40',
      origem: 'Guarulhos',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 700,00',
      horario: '14:25',
      origem: 'Manaus',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 800,00',
      horario: '17:10',
      origem: 'Belo Horizonte',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 900,00',
      horario: '19:55',
      origem: 'Salvador',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 350,00',
      horario: '06:30',
      origem: 'Guarulhos',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 450,00',
      horario: '10:05',
      origem: 'Manaus',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 550,00',
      horario: '15:00',
      origem: 'Belo Horizonte',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 650,00',
      horario: '19:35',
      origem: 'Salvador',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 750,00',
      horario: '07:50',
      origem: 'Guarulhos',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 800,00',
      horario: '12:25',
      origem: 'Salvador',
      destino: 'Belo Horizonte',
    },
    {
      preco: 'R$ 500,00',
      horario: '14:55',
      origem: 'Belo Horizonte',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 600,00',
      horario: '17:30',
      origem: 'Manaus',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 700,00',
      horario: '20:05',
      origem: 'Guarulhos',
      destino: 'Salvador',
    },
    {
      preco: 'R$ 900,00',
      horario: '09:40',
      origem: 'Belo Horizonte',
      destino: 'Manaus',
    },
    {
      preco: 'R$ 350,00',
      horario: '13:15',
      origem: 'Salvador',
      destino: 'Guarulhos',
    },
    {
      preco: 'R$ 550,00',
      horario: '16:00',
      origem: 'Manaus',
      destino: 'Belo Horizonte',
    },
  ];

  public voos: Voos[] = [];

  origemSelecionada: any = undefined;
  destinoSelecionada: any = undefined;
  qtdPessoas: any = undefined;
  errorMsg: boolean = false;
  itemSelecionado: Voos = {
    preco: '',
    horario: '',
    origem: '',
    destino: '',
    valorTotal: 0,
  };

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  buscar() {
    this.errorMsg = false;
    if (
      !this.origemSelecionada ||
      !this.destinoSelecionada ||
      !this.qtdPessoas ||
      this.origemSelecionada === this.destinoSelecionada
    ) {
      this.errorMsg = true;
      this.voos = [];
      return;
    }
    this.voos = this.tabela.filter((item) => {
      return (
        item.origem === this.origemSelecionada &&
        item.destino === this.destinoSelecionada
      );
    });
    this.voos.forEach((data, index) => {
      data.valorTotal =
        parseFloat(data.preco.replace(/[^\d,]/g, '').replace(',', '.')) *
        this.qtdPessoas;
    });
    console.log(this.voos);
    this.changeDetectorRef.detectChanges();
  }

  seleciona(item: Voos) {
    this.itemSelecionado = item;
    this.changeDetectorRef.detectChanges();
  }
}
