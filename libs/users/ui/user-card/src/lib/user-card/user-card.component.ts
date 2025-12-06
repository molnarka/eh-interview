import { Component, EventEmitter, InputSignal, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@angular-advanced-sample/users/models';
import { ButtonComponent } from '@angular-advanced-sample/users/ui/button';

@Component({
  selector: 'lib-user-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  public user: InputSignal<User | undefined> = input<User>();

  @Output() deleteClicked = new EventEmitter<number>();
  @Output() detailsClicked = new EventEmitter<number>();

  public handleDeleteClicked(): void {
    this.deleteClicked.emit(this.user()?.id);
  }

  public handleDetailsClicked(): void {
    this.detailsClicked.emit(this.user()?.id);
  }
}
