import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @ViewChild('primaryDisplay', {static: true}) primaryDisplay: ElementRef;
  @ViewChild('secondaryDisplay', {static: true}) secondaryDisplay: ElementRef;
  @ViewChild('angleToggle', {static: true}) angleToggle: ElementRef;

  radMode: boolean;
  activeCharacterDisplayValue = '';
  allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/', '%', '^', '(', ')'];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.calculatorService.buttonPressed.subscribe(
      button => {
        this.updateActiveDisplay(button.output);
      });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.updateActiveDisplay('=');
    } else if (event.key === 'Delete') {
      this.updateActiveDisplay('CE');
    } else if (event.key === 'Backspace') {
      this.updateActiveDisplay('Backspace');
    } else if (this.allowedKeys.includes(event.key)) {
      this.updateActiveDisplay(event.key);
    }
  }

  updateActiveDisplay(buttonOutput: string) {
    if (!this.angleToggle.nativeElement.checked) {
      this.radMode = true;
    } else {
      this.radMode = false;
    }
    let primaryValue = this.primaryDisplay.nativeElement.value;
    let secondaryValue = this.secondaryDisplay.nativeElement.value;

    if (buttonOutput === 'CE') {
      primaryValue = this.calculatorService.clear();
      secondaryValue = this.calculatorService.clear();
    } else if (buttonOutput === 'Backspace') {
      primaryValue = primaryValue.substring(0, primaryValue.length - 1);
    } else if (buttonOutput === '=') {
      const output = this.calculatorService.calculate(primaryValue, this.radMode);
      if (output === undefined) {
        primaryValue = '0';
      } else if (isNaN(output)) {
        primaryValue = this.primaryDisplay.nativeElement.value;
      } else {
        primaryValue = output;
        secondaryValue = '';
      }
    } else {
      primaryValue += buttonOutput;
      if (isNaN(this.calculatorService.calculate(primaryValue, this.radMode))) {
        secondaryValue = primaryValue;
      } else {
        secondaryValue = this.calculatorService.calculate(primaryValue, this.radMode);
      }
    }

    this.primaryDisplay.nativeElement.value = primaryValue;
    this.secondaryDisplay.nativeElement.value = secondaryValue;
  }
}
