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

  getDateString = (date: string): string => {
    const dateString = moment(date).format('DD/MM/YYYY');
    return dateString;
  };
}
