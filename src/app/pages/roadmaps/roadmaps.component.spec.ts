import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapsComponent } from './roadmaps.component';

describe('RoadmapsComponent', () => {
  let component: RoadmapsComponent;
  let fixture: ComponentFixture<RoadmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
