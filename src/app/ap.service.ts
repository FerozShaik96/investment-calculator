import { UserData } from './app.model';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AppService {
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
    console.log(annualData)
    return annualData;
  }
}
