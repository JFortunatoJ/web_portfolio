import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectsProjectComponent } from './content-projects-project.component';

describe('ContentProjectsProjectComponent', () => {
  let component: ContentProjectsProjectComponent;
  let fixture: ComponentFixture<ContentProjectsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectsProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
