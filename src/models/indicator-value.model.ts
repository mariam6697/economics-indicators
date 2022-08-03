import Indicator from './indicator.model';

export default interface IndicatorValue {
  value: string;
  date: string;
  indicator?: Indicator;
}

export class IndicatorValueClass implements IndicatorValue {
  value: string;
  date: string;

  constructor(value: string, date: string) {
    this.value = value;
    this.date = date;
  }
}
