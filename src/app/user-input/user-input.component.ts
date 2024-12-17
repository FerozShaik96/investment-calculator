import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppService } from '../ap.service';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment="0"
  enteredAnnualInvestment="0"
  enteredExpectedReturns="5"
  enteredDuration="10"
  private userInput=inject(AppService)
  handlerSubmit(){
    const userData={
      enteredInitialInvestment:+this.enteredInitialInvestment,
      enteredAnnualInvestment:Number(this.enteredAnnualInvestment),
      enteredExpectedReturns:Number(this.enteredExpectedReturns),
      enteredDuration:Number(this.enteredDuration)
    }
    this.userInput.calculateInvestmentResults(userData)
  }

}