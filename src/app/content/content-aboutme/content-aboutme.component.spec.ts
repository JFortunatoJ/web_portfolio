import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAboutmeComponent } from './content-aboutme.component';

describe('ContentAboutmeComponent', () => {
  let component: ContentAboutmeComponent;
  let fixture: ComponentFixture<ContentAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
