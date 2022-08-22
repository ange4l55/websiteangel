import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitvenComponent } from './gitven.component';

describe('GitvenComponent', () => {
  let component: GitvenComponent;
  let fixture: ComponentFixture<GitvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
