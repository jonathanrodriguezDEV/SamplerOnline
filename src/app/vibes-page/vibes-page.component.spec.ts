import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibesPageComponent } from './vibes-page.component';

describe('VibesPageComponent', () => {
  let component: VibesPageComponent;
  let fixture: ComponentFixture<VibesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
