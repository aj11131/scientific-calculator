import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Button } from 'src/app/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() button: Button;

  constructor() { }

  ngOnInit() {
  }

}
