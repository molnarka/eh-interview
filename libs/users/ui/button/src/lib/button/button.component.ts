import { Component, EventEmitter, Input, InputSignal, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  public _buttonLabel: string = '';
  // The styling is different if the button is defined to be a delete button
  // red background color
  public _isDeleteButton: boolean = false;

  @Input({required: true})
  set isDeleteButton(value: boolean) {
    this._isDeleteButton = value;
  }

  @Input({required: true})
  set buttonLabel(label: string) {
    this._buttonLabel = label;
  }

  @Output() clicked = new EventEmitter<void>();

  public click(): void {
    this.clicked.emit();
  }
}
