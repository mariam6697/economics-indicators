import IndicatorValue from './indicator-value.model';

export default interface PaginatedValues {
  totalItems: number;
  values: IndicatorValue[];
}
