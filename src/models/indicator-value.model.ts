import Indicator from './indicator.model';

export default interface IndicatorValue {
  value: string;
  date: string;
  indicator?: Indicator;
}
