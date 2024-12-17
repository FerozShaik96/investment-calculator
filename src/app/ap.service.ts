import { UserData, AnnualData } from './app.model';
import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AppService {
  // private annualData: AnnualData[] = [];
  private annualData = signal<AnnualData[] | undefined>(undefined);

  getAnnualData() {
    return this.annualData || [];
  }
  calculateInvestmentResults(userData: UserData) {
    const {
      enteredInitialInvestment,
      enteredAnnualInvestment,
      enteredExpectedReturns,
      enteredDuration,
    } = userData;
    const annualData = [];
    let investmentValue = enteredInitialInvestment;
    for (let i = 0; i < enteredDuration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (enteredExpectedReturns / 100);
      investmentValue += interestEarnedInYear + enteredAnnualInvestment;
      const totalInterest =
        investmentValue -
        enteredAnnualInvestment * year -
        enteredInitialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        enteredAnnualInvestment: enteredAnnualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          enteredInitialInvestment + enteredAnnualInvestment * year,
      });
    }
    this.annualData.set(annualData);
  }
}
