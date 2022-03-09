import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConspiraciesComponent } from './conspiracies.component';

describe('ConspiraciesComponent', () => {
  let component: ConspiraciesComponent;
  let fixture: ComponentFixture<ConspiraciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConspiraciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConspiraciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
