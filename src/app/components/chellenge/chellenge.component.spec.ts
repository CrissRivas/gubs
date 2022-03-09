import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChellengeComponent } from './chellenge.component';

describe('ChellengeComponent', () => {
  let component: ChellengeComponent;
  let fixture: ComponentFixture<ChellengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChellengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChellengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
