import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewBaseComponent } from './project-view-base.component';

describe('ProjectViewBaseComponent', () => {
  let component: ProjectViewBaseComponent;
  let fixture: ComponentFixture<ProjectViewBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectViewBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectViewBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
