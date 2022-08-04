import { TestBed } from '@angular/core/testing';
import Currency from 'src/models/currency.model';
import Indicator from 'src/models/indicator.model';

import { CmfApiService } from './cmf-api.service';

describe('CmfApiService', () => {
  let service: CmfApiService;
  const testCurrency: Currency = {
    symbol: '$',
    symbolPositionRight: false,
    name: 'Peso',
    isoCode: 'CLP',
  };
  const testIndicator: Indicator = {
    name: 'dolar',
    label: 'Dólar',
    symbol: '$',
    monthly: false,
    currency: testCurrency,
    color: '#228B22',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call CMF API', async () => {
    const result: any = await service.getIndicatorValue(testIndicator);
    expect(result[0].value).toBeDefined();
    expect(result[0].date).toBeDefined();
  });
});
