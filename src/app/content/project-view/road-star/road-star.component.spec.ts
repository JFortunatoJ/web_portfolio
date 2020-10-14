import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadStarComponent } from './road-star.component';

describe('HeroisPandemiaComponent', () => {
  let component: RoadStarComponent;
  let fixture: ComponentFixture<RoadStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
