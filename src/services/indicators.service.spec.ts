import { TestBed } from '@angular/core/testing';
import Indicator from 'src/models/indicator.model';

import { IndicatorsService } from './indicators.service';

describe('IndicatorsService', () => {
  let service: IndicatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getIndicators should return an indicators list', () => {
    const result: Indicator[] = service.getIndicators();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].label).toBeDefined();
  });

  it('getIndicatorByName should return a valid indicator', () => {
    const result: Indicator = service.getIndicatorByName('dolar')!;
    expect(result).toBeDefined();
    expect(result.label).toBe('Dólar');
  });
});
