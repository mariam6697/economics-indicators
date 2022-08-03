import Currency from './currency.model';

export default interface Indicator {
  name: string;
  label: string;
  symbol: string;
  fullName?: string;
  currency?: Currency;
  color?: string;
}

export class IndicatorClass implements Indicator {
  name: string;
  label: string;
  symbol: string;
  fullName?: string;
  currency?: Currency;
  color?: string;

  constructor(
    name: string,
    label: string,
    symbol: string,
    currency?: Currency,
    fullName?: string,
    color?: string
  ) {
    this.name = name;
    this.label = label;
    this.symbol = symbol;
    this.fullName = fullName;
    this.currency = currency;
    this.color = color;
  }
}
