import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectsComponent } from './content-projects.component';

describe('ContentProjectsComponent', () => {
  let component: ContentProjectsComponent;
  let fixture: ComponentFixture<ContentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
