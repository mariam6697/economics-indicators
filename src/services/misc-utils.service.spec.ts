import { TestBed } from '@angular/core/testing';
import Currency from 'src/models/currency.model';
import Indicator from 'src/models/indicator.model';

import { MiscUtilsService } from './misc-utils.service';

describe('MiscUtilsService', () => {
  let service: MiscUtilsService;
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
    service = TestBed.inject(MiscUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getValueString should return a valid value', () => {
    const result: string = service.getValueString('830,5', testIndicator);
    expect(result).toBe('$ 830,5');
  });

  it('getDateString should return a valid value', () => {
    const result: string = service.getDateString('2022-08-04', testIndicator);
    expect(result).toBe('04/08/2022');
  });

  it('getDateString should return a valid value with monthly indicator', () => {
    const monthlyIndicator: Indicator = {
      ...testIndicator,
      ...{ monthly: true },
    };
    const result: string = service.getDateString(
      '2022-08-04',
      monthlyIndicator
    );
    expect(result).toBe('Agosto 2022');
  });
});
