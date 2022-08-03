import { Component, OnInit } from '@angular/core';
import Currency from 'src/models/currency.model';
import Indicator from 'src/models/indicator.model';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {
  chileanPeso: Currency = {
    symbol: '$',
    name: 'Peso',
    isoCode: 'CLP',
  };
  percentage: Currency = {
    symbol: '%',
    name: 'Porcentaje',
  };
  indicators: Indicator[] = [
    {
      name: 'dolar',
      label: 'Dólar',
      symbol: '$',
      currency: this.chileanPeso,
      color: '#228B22',
    },
    {
      name: 'euro',
      label: 'Euro',
      symbol: '€',
      currency: this.chileanPeso,
      color: '#FFD700',
    },
    {
      name: 'ipc',
      label: 'IPC',
      symbol: '$',
      fullName: 'Índice de Precios al Consumidor',
      currency: this.percentage,
      color: '#008B8B',
    },
    {
      name: 'uf',
      label: 'UF',
      symbol: '$',
      fullName: 'Unidad de Fomento',
      currency: this.chileanPeso,
      color: '#800080',
    },
    {
      name: 'utm',
      label: 'UTM',
      symbol: '$',
      fullName: 'Unidad Tributaria Mensual',
      currency: this.chileanPeso,
      color: '#2F4F4F',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
