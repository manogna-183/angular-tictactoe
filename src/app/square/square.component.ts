import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{value}}</button>
    <button nbButton hero status="warning" *ngIf="won">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X' && !won">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O' && !won">{{ value }}</button>

  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  @Input() won: false;
}
