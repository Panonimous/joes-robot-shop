import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormControlsComponent } from './template-form-controls.component';
import { FormsModule } from '@angular/forms';

describe('TemplateFormControlsComponent', () => {
  let component: TemplateFormControlsComponent;
  let fixture: ComponentFixture<TemplateFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormControlsComponent ],
      imports:[FormsModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
