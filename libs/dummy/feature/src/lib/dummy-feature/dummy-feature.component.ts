import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@angular-advanced-sample/dummy/model';
import { DummyUserFacadeService } from '@angular-advanced-sample/dummy/data-access';
import { DummyUiComponent } from '@angular-advanced-sample/dummy/ui';

@Component({
  selector: 'lib-dummy-feature',
  standalone: true,
  imports: [CommonModule, DummyUiComponent],
  templateUrl: './dummy-feature.component.html',
  styleUrl: './dummy-feature.component.css',
})
// This is a feature component, using multiple libraries, including ui ones (ui = components that are just shows the data they got)
export class DummyFeatureComponent {
  public users: WritableSignal<User[]> = signal([]);
  constructor(private usersFacade: DummyUserFacadeService) {
    this.loadUsers();
  }

  private async loadUsers(): Promise<void> {
    this.users.set(await this.usersFacade.getUsersWithGreenEye());
  }
}
