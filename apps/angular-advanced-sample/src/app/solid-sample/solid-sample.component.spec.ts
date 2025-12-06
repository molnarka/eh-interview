import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolidSampleComponent } from './solid-sample.component';

describe('SolidSampleComponent', () => {
  let component: SolidSampleComponent;
  let fixture: ComponentFixture<SolidSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidSampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolidSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
