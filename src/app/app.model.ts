export interface UserData {
  enteredInitialInvestment: number;
  enteredAnnualInvestment: number;
  enteredExpectedReturns: number;
  enteredDuration: number;
}

export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  enteredAnnualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
