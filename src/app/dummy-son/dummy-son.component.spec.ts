import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummySonComponent } from './dummy-son.component';

describe('DummySonComponent', () => {
  let component: DummySonComponent;
  let fixture: ComponentFixture<DummySonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummySonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummySonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
