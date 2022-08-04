import { Injectable } from '@angular/core';
import Currency from 'src/models/currency.model';
import Indicator from 'src/models/indicator.model';

@Injectable({
  providedIn: 'root',
})
export class IndicatorsService {
  chileanPeso: Currency = {
    symbol: '$',
    symbolPositionRight: false,
    name: 'Peso',
    isoCode: 'CLP',
  };
  percentage: Currency = {
    symbolPositionRight: true,
    symbol: '%',
    name: 'Porcentaje',
  };
  indicators: Indicator[] = [
    {
      name: 'dolar',
      label: 'Dólar',
      symbol: '$',
      monthly: false,
      currency: this.chileanPeso,
      color: '#228B22',
    },
    {
      name: 'euro',
      label: 'Euro',
      symbol: '€',
      monthly: false,
      currency: this.chileanPeso,
      color: '#FFD700',
    },
    {
      name: 'ipc',
      label: 'IPC',
      symbol: '%',
      monthly: true,
      fullName: 'Índice de Precios al Consumidor',
      currency: this.percentage,
      color: '#008B8B',
    },
    {
      name: 'uf',
      label: 'UF',
      symbol: '$',
      monthly: false,
      fullName: 'Unidad de Fomento',
      currency: this.chileanPeso,
      color: '#800080',
    },
    {
      name: 'utm',
      label: 'UTM',
      symbol: '$',
      monthly: true,
      fullName: 'Unidad Tributaria Mensual',
      currency: this.chileanPeso,
      color: '#2F4F4F',
    },
  ];

  constructor() {}

  getIndicators = (): Indicator[] => {
    return this.indicators;
  };

  getIndicatorByName = (name: string): Indicator | null => {
    const indicator: Indicator | null =
      this.indicators.find((item: Indicator) => item.name === name) ?? null;
    return indicator;
  };
}
