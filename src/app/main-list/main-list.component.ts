import { Component, OnInit } from '@angular/core';
import Indicator from 'src/models/indicator.model';
import { IndicatorsService } from 'src/services/indicators.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {
  title: string = 'Indicadores Económicos';
  indicators: Indicator[] = [];

  constructor(private indicatorsService: IndicatorsService) {}

  ngOnInit(): void {
    this.getIndicators();
  }

  getIndicators = (): void => {
    const indicators: Indicator[] = this.indicatorsService.getIndicators();
    this.indicators = indicators;
  };
}
