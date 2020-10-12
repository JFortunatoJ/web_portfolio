import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectsProjectTagComponent } from './content-projects-project-tag.component';

describe('ContentProjectsProjectTagComponent', () => {
  let component: ContentProjectsProjectTagComponent;
  let fixture: ComponentFixture<ContentProjectsProjectTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectsProjectTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectsProjectTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
