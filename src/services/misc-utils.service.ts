import { Injectable } from '@angular/core';
import * as moment from 'moment';
import Indicator from 'src/models/indicator.model';

@Injectable({
  providedIn: 'root',
})
export class MiscUtilsService {
  constructor() {}

  getValueString = (value: string, indicator: Indicator): string => {
    if (indicator.currency?.symbolPositionRight) {
      return `${value} ${indicator.currency.symbol}`;
    }
    return `${indicator.currency?.symbol} ${value}`;
  };

  getDateString = (date: string, indicator?: Indicator): string => {
    moment.locale('es-ES');
    let format = 'DD/MM/YYYY';
    if (indicator && indicator.monthly) {
      format = 'MMMM YYYY';
    }
    const dateString = moment(date).format(format);
    return indicator && indicator.monthly
      ? dateString.charAt(0).toUpperCase() + dateString.slice(1)
      : dateString;
  };
}
