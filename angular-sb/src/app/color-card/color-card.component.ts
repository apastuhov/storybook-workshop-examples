import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.scss']
})
export class ColorCardComponent {
  @Input() color: string;

  @Output() colorClick = new EventEmitter();

  getStyle() {
    return {
      background: this.color,
    };
  }

  handleClick() {
    this.colorClick.emit();
  }
}
