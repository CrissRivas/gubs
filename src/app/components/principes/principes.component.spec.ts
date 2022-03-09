import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipesComponent } from './principes.component';

describe('PrincipesComponent', () => {
  let component: PrincipesComponent;
  let fixture: ComponentFixture<PrincipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
