import { Component } from '@angular/core';
import { standardButtons } from './button-values';
import { scientificButtons } from './button-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Calculator';
  standard = standardButtons;
  scientific = scientificButtons;
}
