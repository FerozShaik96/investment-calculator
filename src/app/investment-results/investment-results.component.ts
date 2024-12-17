import { Component, inject } from '@angular/core';
import { AppService } from '../ap.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investMentData = inject(AppService);

  get results() {
    return this.investMentData.getAnnualData();
  }
}
