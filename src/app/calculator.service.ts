import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Button } from './button.model';
import { FormatService } from './format.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  buttonPressed = new Subject<Button>();

  constructor(private formatService: FormatService) { }

  onButtonPress(button: Button) {
    this.buttonPressed.next(button);
  }

  calculate(equation: string, radMode: boolean) {
      try {
        // tslint:disable-next-line: no-eval
        return eval(this.formatService.format(equation, radMode));
      } catch (e) {
        return equation;
      }
  }

  clear() {
    return '';
  }
}
