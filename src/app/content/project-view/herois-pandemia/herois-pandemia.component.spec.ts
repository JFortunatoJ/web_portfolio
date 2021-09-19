import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroisPandemiaComponent } from './herois-pandemia.component';

describe('HeroisPandemiaComponent', () => {
  let component: HeroisPandemiaComponent;
  let fixture: ComponentFixture<HeroisPandemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroisPandemiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroisPandemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
