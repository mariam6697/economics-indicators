import Currency from './currency.model';

export default interface Indicator {
  name: string;
  label: string;
  symbol: string;
  fullName?: string;
  currency: Currency;
  color?: string;
}
