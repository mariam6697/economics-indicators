import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import Indicator from 'src/models/indicator.model';

@Injectable({
  providedIn: 'root',
})
export class CmfApiService {
  cmfApiKey: string = environment.cmfApiKey;
  cmfApiUrl: string = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';

  constructor() {}

  getIndicatorValue = async (indicator: Indicator): Promise<any> => {
    const url: string = `${this.cmfApiUrl}/${indicator.name}?apikey=${this.cmfApiKey}&formato=json`;
    const response: any = await axios.get(url);
    console.log('response', response);
  };
}
