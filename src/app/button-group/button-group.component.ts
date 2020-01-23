import { Component, OnInit, Input } from '@angular/core';
import { Button } from '../button.model';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons: Button[];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  onButtonPress(button: Button) {
    this.calculatorService.onButtonPress(button);
  }
}
