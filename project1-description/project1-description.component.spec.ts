import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1DescriptionComponent } from './project1-description.component';

describe('Project1DescriptionComponent', () => {
  let component: Project1DescriptionComponent;
  let fixture: ComponentFixture<Project1DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1DescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project1DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
