import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyFeatureComponent } from '@angular-advanced-sample/dummy/feature';
import { UsersFeatureComponent } from '@angular-advanced-sample/users/feature';

@Component({
  selector: 'app-facade-sample',
  standalone: true,
  imports: [CommonModule, DummyFeatureComponent, UsersFeatureComponent],
  templateUrl: './facade-sample.component.html',
  styleUrl: './facade-sample.component.css'
})
export class FacadeSampleComponent {}
