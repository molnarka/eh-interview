import { Component, InputSignal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@angular-advanced-sample/dummy/model';

@Component({
  selector: 'lib-dummy-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dummy-ui.component.html',
  styleUrl: './dummy-ui.component.css',
})
export class DummyUiComponent {
  public user: InputSignal<User | undefined> = input<User>();
}
