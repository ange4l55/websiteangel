import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvnvenComponent } from './svnven.component';

describe('SvnvenComponent', () => {
  let component: SvnvenComponent;
  let fixture: ComponentFixture<SvnvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvnvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvnvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
