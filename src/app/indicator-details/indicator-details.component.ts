import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import IndicatorValue from 'src/models/indicator-value.model';
import Indicator, { IndicatorClass } from 'src/models/indicator.model';
import { CmfApiService } from 'src/services/cmf-api.service';
import { IndicatorsService } from 'src/services/indicators.service';
import { MiscUtilsService } from 'src/services/misc-utils.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-indicator-details',
  templateUrl: './indicator-details.component.html',
  styleUrls: ['./indicator-details.component.scss'],
})
export class IndicatorDetailsComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  indicatorName: string = '';
  indicator: Indicator = new IndicatorClass('', '', '');
  title: string = 'Detalle | Indicadores Económicos';
  loading: boolean = true;
  lastValue!: IndicatorValue;
  values: IndicatorValue[] = [];
  error: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private indicatorsService: IndicatorsService,
    private titleService: Title,
    private cmfApiService: CmfApiService,
    private miscUtilsService: MiscUtilsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const indicatorName = params['indicatorName'];
      this.indicatorName = indicatorName;
      this.getIndicator(this.indicatorName);
      this.getApiValues();
    });
  }

  getApiValues = async (): Promise<void> => {
    this.loading = true;
    await this.getLastValue(this.indicator);
    await this.getValues(this.indicator);
    this.loading = false;
  };

  getIndicator = (name: string): void => {
    const indicator: Indicator | null =
      this.indicatorsService.getIndicatorByName(name);
    if (!indicator) {
      this.router.navigate([`/404`]);
    } else {
      this.titleService.setTitle(
        `Detalles: ${indicator.label} | Indicadores Económicos`
      );
      this.indicator = indicator;
    }
  };

  getLastValue = async (indicator: Indicator): Promise<void> => {
    try {
      const values: IndicatorValue[] =
        await this.cmfApiService.getIndicatorValue(indicator);
      let value: IndicatorValue = values[0];
      this.lastValue = value;
    } catch (error: any) {
      this.error = true;
    }
  };

  getValues = async (indicator: Indicator): Promise<void> => {
    try {
      const currentYear: number = new Date().getFullYear();
      const values: IndicatorValue[] =
        await this.cmfApiService.getIndicatorValue(
          indicator,
          currentYear.toString()
        );
      const limit: number =
        indicator.name === 'ipc' || indicator.name === 'utm' ? 12 : 10;
      this.values = values.length > limit ? values.slice(limit * -1) : values;

      if (values.length < limit) {
        let extraValues: IndicatorValue[] =
          await this.cmfApiService.getIndicatorValue(
            indicator,
            (currentYear - 1).toString()
          );
        extraValues = extraValues.splice((limit - this.values.length) * -1);
        this.values = [...extraValues, ...this.values];
      }
      this.setChartValues(this.values);
    } catch (error: any) {
      this.error = true;
    }
  };

  setChartValues = (values: IndicatorValue[]): void => {
    const valuesOnly: number[] = values.map((value) =>
      parseFloat(value.value.replace(',', '.'))
    );
    const datesOnly: string[] = values.map((value) =>
      this.getDateString(value.date)
    );
    this.chartOptions = {
      series: [
        {
          name: 'Valor',
          data: valuesOnly,
          color: '#fd7e14',
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      markers: {
        size: 0,
      },
      dataLabels: {
        formatter: (value: string) => {
          return this.getValueString(value);
        },
      },
      title: {
        text: `${this.indicator.label}: Valores históricos`,
      },
      xaxis: {
        categories: datesOnly,
      },
    };
  };

  getValueString = (value: string): string => {
    return this.miscUtilsService.getValueString(value, this.indicator);
  };

  getDateString = (date: string): string => {
    return this.miscUtilsService.getDateString(date);
  };
}
