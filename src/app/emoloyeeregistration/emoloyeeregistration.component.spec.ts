import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoloyeeregistrationComponent } from './emoloyeeregistration.component';

describe('EmoloyeeregistrationComponent', () => {
  let component: EmoloyeeregistrationComponent;
  let fixture: ComponentFixture<EmoloyeeregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoloyeeregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoloyeeregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
