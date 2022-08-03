import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import IndicatorValue from 'src/models/indicator-value.model';
import Indicator, { IndicatorClass } from 'src/models/indicator.model';
import PaginatedValues from 'src/models/paginated-values.model';
import { CmfApiService } from 'src/services/cmf-api.service';
import { IndicatorsService } from 'src/services/indicators.service';

@Component({
  selector: 'app-indicator-values',
  templateUrl: './indicator-values.component.html',
  styleUrls: ['./indicator-values.component.scss'],
})
export class IndicatorValuesComponent implements OnInit {
  indicatorName: string = '';
  indicator: Indicator = new IndicatorClass('', '', '');
  title: string = 'Valores | Indicadores Económicos';
  values: IndicatorValue[] = [];
  selectedYear: string = '2022';
  loading: boolean = true;
  years: (startYear: any) => string[];
  yearOptions: string[] = [];

  currentPage: number = 1;
  limit: number = 10;

  constructor(
    private activatedRoute: ActivatedRoute,
    private indicatorsService: IndicatorsService,
    private titleService: Title,
    private cmfApiService: CmfApiService
  ) {
    this.years = (startYear: number) => {
      let currentYear: number = new Date().getFullYear();
      let years: string[] = [];
      startYear = startYear || 1980;
      while (startYear <= currentYear) {
        let year: number = startYear++;
        years.push(year.toString());
      }
      return years;
    };

    this.yearOptions = this.years(2000);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const indicatorName = params['indicatorName'];
      this.indicatorName = indicatorName;
      this.getIndicator(this.indicatorName);
    });
  }

  getIndicator = (name: string): void => {
    const indicator: Indicator | null =
      this.indicatorsService.getIndicatorByName(name);
    if (!indicator) {
      // handle error
    }
    this.titleService.setTitle(
      `Valores: ${indicator!.label} | Indicadores Económicos`
    );
    this.indicator = indicator!;
    this.getValues(this.indicator);
  };

  getValues = async (indicator: Indicator): Promise<void> => {
    try {
      this.loading = true;
      const values: IndicatorValue[] =
        await this.cmfApiService.getIndicatorValue(
          indicator,
          this.selectedYear
        );
      this.values = values;
    } catch (error: any) {
      // handle error
    } finally {
      this.loading = false;
    }
  };

  selectYear = (year: string): void => {
    this.selectedYear = year;
    this.getValues(this.indicator);
  };

  getValueString = (value: string): string => {
    if (this.indicator.currency?.symbolPositionRight) {
      return `${value} ${this.indicator.currency.symbol}`;
    }
    return `${this.indicator.currency?.symbol} ${value}`;
  };

  getDateString = (date: string): string => {
    const dateString = moment(date).format('DD/MM/YYYY');
    return dateString;
  };
}
