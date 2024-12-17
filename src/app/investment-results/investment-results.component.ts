import { Component, inject, Input } from '@angular/core';
import { AppService } from '../ap.service';
import { AnnualData } from '../app.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) annualData!: AnnualData[];
}
