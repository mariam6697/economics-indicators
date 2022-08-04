import Currency from './currency.model';

export default interface Indicator {
  name: string;
  label: string;
  symbol: string;
  monthly: boolean;
  fullName?: string;
  currency?: Currency;
  color?: string;
}

export class IndicatorClass implements Indicator {
  name: string;
  label: string;
  symbol: string;
  monthly: boolean;
  fullName?: string;
  currency?: Currency;
  color?: string;

  constructor(
    name: string,
    label: string,
    symbol: string,
    monthly: boolean,
    currency?: Currency,
    fullName?: string,
    color?: string
  ) {
    this.name = name;
    this.label = label;
    this.symbol = symbol;
    this.monthly = monthly;
    this.fullName = fullName;
    this.currency = currency;
    this.color = color;
  }
}
