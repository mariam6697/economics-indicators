import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import IndicatorValue, {
  IndicatorValueClass,
} from 'src/models/indicator-value.model';
import Indicator from 'src/models/indicator.model';
import PaginatedValues from 'src/models/paginated-values.model';

@Injectable({
  providedIn: 'root',
})
export class CmfApiService {
  cmfApiKey: string = environment.cmfApiKey;
  cmfApiUrl: string = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';

  constructor() {}

  getIndicatorValue = async (
    indicator: Indicator,
    year?: string
  ): Promise<IndicatorValue[]> => {
    let url: string = `${this.cmfApiUrl}/${indicator.name}`;
    if (year) {
      url += `/${year}`;
    }
    url += `?apikey=${this.cmfApiKey}&formato=json`;
    const response: any = await axios.get(url);
    const label: string = Object.keys(response.data)[0];
    const values: IndicatorValue[] = response.data[label].map((val: any) => {
      const value: IndicatorValue = new IndicatorValueClass(
        val['Valor'],
        val['Fecha']
      );
      return value;
    });
    return values;
  };
}
